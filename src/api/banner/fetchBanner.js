import client from '../index';
import bannerEntries from '@/__mocks__/mock_banner_entries';

/**
 * Mocks the banner entries
//  * @returns {Promise<{imageUrl: string, href: string}[]>}
 */
export default async () => {
  // return await client.get()

  await setTimeout(() => {}, 500);

  return bannerEntries;
};
