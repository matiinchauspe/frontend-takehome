import { useContext } from 'react';
import { CustomCollectionContext } from '@context';

/**
 * UseCustomCollection() returns the value of the CustomCollectionContext
 * @returns The context object.
 */
export const useCustomCollection = () => {
  const context = useContext(CustomCollectionContext);

  if (context === null) {
    throw new Error("'CustomCollectionContext' cannot be null");
  }

  return context;
};
