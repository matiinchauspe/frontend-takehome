import { useContext } from 'react';
import { CustomCollectionContext } from '@context';

export const useCustomCollection = () => {
  const context = useContext(CustomCollectionContext);

  if (context === null) {
    throw new Error("'CustomCollectionContext' cannot be null");
  }

  return context;
};
