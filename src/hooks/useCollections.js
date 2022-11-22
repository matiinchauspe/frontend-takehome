import useSWR from 'swr';

import { collectionsUrl } from '@api';
import { CollectionsTransform } from '@services';

export const useCollections = () => {
  const { data, error, isValidating } = useSWR(
    {
      url: collectionsUrl,
      /* A function that is transforming the data that is returned from the API. */
      transform: CollectionsTransform.CollectionsDataAdapter,
    },
    { revalidateOnFocus: false }
  );

  return { data, error, isLoading: isValidating || !data };
};
