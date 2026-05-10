import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } from '$env/static/private';
import type { SpotifyTrack } from '$lib/types/spotify-track';

type SpotifyTokenResponse = {
  access_token: string;
};

type SpotifyRecentlyPlayedResponse = {
  items: {
    track: {
      name: string;
      artists: { name: string }[];
      external_urls: { spotify: string };
    };
  }[];
};

async function getAccessToken(fetchFn: typeof fetch): Promise<string | null> {
  const credentials = btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`);

  const response = await fetchFn('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  });

  if (!response.ok) {
    console.error('[Spotify] Exchanging tokens failed:', response.status, await response.text());

    return null;
  }

  const data = (await response.json()) as SpotifyTokenResponse;

  return data.access_token ?? null;
}

export async function fetchSpotifyTrack(fetchFn: typeof fetch): Promise<SpotifyTrack | null> {
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
    console.error('[Spotify] Missing env variables');

    return null;
  }

  try {
    const accessToken = await getAccessToken(fetchFn);

    if (!accessToken) {
      return null;
    }

    const response = await fetchFn('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      console.error('[Spotify] Fetching recently played failed:', response.status, await response.text());

      return null;
    }

    const data = (await response.json()) as SpotifyRecentlyPlayedResponse;
    const track = data.items[0]?.track;

    if (!track) {
      return null;
    }

    return {
      title: track.name,
      artist: track.artists.map((a) => a.name).join(', '),
      link: track.external_urls.spotify,
    };
  } catch (e) {
    console.error('[Spotify] Unexpected error:', e);

    return null;
  }
}
