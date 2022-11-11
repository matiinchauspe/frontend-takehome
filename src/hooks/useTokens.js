import useSWR from 'swr';

import { tokensUrl, fetcher } from '@api';
import { TokensTransform } from '@services';

export const useTokens = (collectionId) => {
  const queryParams = `?collection=${collectionId}`;
  const { data, error, isValidating } = useSWR(
    /* eslint-disable indent */
    collectionId
      ? {
          url: tokensUrl,
          queryParams,
          transform: TokensTransform.TokensDataAdapter,
        }
      : null,
    fetcher
  );

  return { data, error, isLoading: isValidating || !data };
};
