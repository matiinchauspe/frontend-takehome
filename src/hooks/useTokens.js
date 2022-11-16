/* eslint-disable indent */
import useSWR from 'swr';

import { tokensUrl, fetcher } from '@api';
import { TokensTransform } from '@services';

export const useTokens = (collectionId) => {
  const queryParams = `?collection=${collectionId}`;
  const { data, error, isValidating } = useSWR(
    collectionId
      ? {
          url: tokensUrl,
          queryParams,
          transform: TokensTransform.TokensDataAdapter,
        }
      : null,
    fetcher,
    { revalidateOnFocus: false }
  );

  return { data, error, isLoading: isValidating };
};
