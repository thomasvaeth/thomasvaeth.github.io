import { fetchLetterboxdFeed } from '$lib/server/letterboxd-feed';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
  const letterboxdFeed = await fetchLetterboxdFeed(fetch);

  return {
    letterboxdFeed,
  };
};
