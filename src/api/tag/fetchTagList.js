import client from '../index';
import tags from '@/__mocks__/mock_tags';

export default async () => {
  // return await client.get()

  await setTimeout(() => {}, 500);

  return tags;
};
