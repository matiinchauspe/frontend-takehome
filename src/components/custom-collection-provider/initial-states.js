import { CUSTOM_COLLECTION_STATUS } from '@constants';

export const collectionEditionInitialState = {
  name: '',
  status: CUSTOM_COLLECTION_STATUS.CREATE,
  tokens: [],
};

export const savedCollectionsInitialState = {
  collections: [],
  count: 0,
};
