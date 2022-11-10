import useSWR from 'swr';

import { collectionsUrl, fetcher } from '@api';
import { CollectionsTransform } from '@services';

export const useCollections = () => {
  const { data, error, isValidating } = useSWR(
    {
      url: collectionsUrl,
      /* A function that is transforming the data that is returned from the API. */
      transform: CollectionsTransform.CollectionsDataAdapter,
    },
    fetcher,
    {
      revalidateOnFocus: false,
      suspense: true,
    }
  );

  return { data, error, isValidating };
};
