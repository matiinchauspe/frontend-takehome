import { useState } from 'react';
import { CustomCollectionProvider as CustomColProvider } from '@context';
import { usePersistState } from '@hooks';

const CustomCollectionProvider = ({ children }) => {
  const [savedCollections, setSavedCollections] = usePersistState('savedCollections', {
    collections: [],
    count: 0,
  });

  const [collectionInEdition, setCollectionInEdition] = useState({
    name: '',
    tokens: [],
  });

  // #Saved collections handlers
  const addToSavedCollections = (collection) => {
    const newSavedCollections = [...savedCollections.collections, collection];
    const count = savedCollections.count + 1;

    setSavedCollections({
      collections: newSavedCollections,
      count,
    });
  };

  const removeFromSavedCollections = (collectionId) => {
    const collectionIndex = savedCollections.collections.findIndex(
      (col) => col.id === collectionId
    );
    const newSavedCollections = savedCollections.collections.filter(
      (_, index) => index !== collectionIndex
    );
    const count = savedCollections.count - 1;

    setSavedCollections({
      collections: newSavedCollections,
      count,
    });
  };

  // #Edition - When we want to edit a particular collection
  const selectCollectionToEdit = (collectionId) => {
    const collectionIndex = savedCollections.collections.findIndex(
      (col) => col.id === collectionId
    );
    const currentCol = savedCollections.collections.filter((_, index) => index === collectionIndex);

    setCollectionInEdition(currentCol);
  };

  const addTokenToCollection = (token) => {
    setCollectionInEdition((prevState) => ({
      ...prevState,
      tokens: [...prevState.tokens, token],
    }));
  };

  const removeTokenFromCollection = (tokenId) => {
    const tokenIndex = collectionInEdition.tokens.findIndex((t) => t.id === tokenId);
    const newTokenList = collectionInEdition.tokens.filter((_, index) => index !== tokenIndex);

    setCollectionInEdition((prevState) => ({
      ...prevState,
      tokens: newTokenList,
    }));
  };

  const valueToProvider = {
    addToSavedCollections,
    removeFromSavedCollections,
    // # Edition
    collectionInEdition,
    addTokenToCollection,
    removeTokenFromCollection,
    selectCollectionToEdit,
  };

  return <CustomColProvider value={valueToProvider}>{children}</CustomColProvider>;
};

export default CustomCollectionProvider;
