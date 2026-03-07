import { XMLParser } from 'fast-xml-parser';
import type { LetterboxdFeedItem } from '$lib/types/letterboxd-feed';

type Item = {
  title?: string;
  link?: string;
  description?: string;
  'letterboxd:filmTitle'?: string;
  'letterboxd:memberRating'?: number;
};

type ParsedFeed = {
  rss?: {
    channel?: {
      item?: Item | Item[];
    };
  };
};

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '',
});

function getPosterFromDescription(description: Item['description']): string | null {
  if (!description) {
    return null;
  }

  const imageMatch = description.match(/<img[^>]+src=["']([^"']+)["']/i);

  return imageMatch?.[1] ?? null;
}

function parseFeedItems(feedXml: string): LetterboxdFeedItem[] {
  const parsed = parser.parse(feedXml) as ParsedFeed;
  const itemsNode = parsed.rss?.channel?.item;

  if (!itemsNode) {
    return [];
  }

  const items = Array.isArray(itemsNode) ? itemsNode : [itemsNode];

  return items
    .map((item): LetterboxdFeedItem | null => {
      const title = item['letterboxd:filmTitle'] || item.title || null;
      const link = item.link || null;
      const poster = getPosterFromDescription(item.description);
      const memberRating = item['letterboxd:memberRating'];

      if (!title || !link || !poster) {
        return null;
      }

      return {
        title,
        link,
        poster,
        ...(memberRating !== undefined ? { memberRating } : {}),
      };
    })
    .filter((item): item is LetterboxdFeedItem => Boolean(item))
    .slice(0, 4);
}

export async function fetchLetterboxdFeed(fetchFn: typeof fetch): Promise<LetterboxdFeedItem[]> {
  try {
    const response = await fetchFn('https://letterboxd.com/thomasvaeth/rss/');

    if (!response.ok) {
      return [];
    }

    const feedXml = await response.text();

    return parseFeedItems(feedXml);
  } catch {
    return [];
  }
}
