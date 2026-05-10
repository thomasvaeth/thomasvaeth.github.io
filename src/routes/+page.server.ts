import { fetchLetterboxdFeed } from '$lib/server/letterboxd-feed';
import { fetchSpotifyTrack } from '$lib/server/spotify-track';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
  const [letterboxdFeed, spotifyTrack] = await Promise.all([
    fetchLetterboxdFeed(fetch),
    fetchSpotifyTrack(fetch),
  ]);

  return {
    letterboxdFeed,
    spotifyTrack,
  };
};
