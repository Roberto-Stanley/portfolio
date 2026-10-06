import { createClient } from 'contentful';
import type { EntrySkeletonType, EntriesQueries } from 'contentful';
import logger from '@/lib/logger';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getEntries<T extends EntrySkeletonType>(
  contentType: string,
  query: EntriesQueries<T, undefined>
) {
  logger.info({ contentType }, "Fetching from Contentful");
  try {
    const entries = await contentfulClient.getEntries<T>(query);
    logger.info({ contentType }, "Successfully fetched from Contentful");
    return entries;
  } catch (err) {
    logger.error({ err, contentType }, "Failed to fetch from Contentful");
    throw err;
  }
}
