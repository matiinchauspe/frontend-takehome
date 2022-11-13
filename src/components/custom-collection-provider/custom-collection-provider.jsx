import { useState, useCallback } from 'react';
import { v4 as uuid } from 'uuid';

import { CustomCollectionProvider as CustomColProvider } from '@context';
import { usePersistState } from '@hooks';

const CustomCollectionProvider = ({ children }) => {
  // #Initial States
  // Custom collections
  const [savedCollections, setSavedCollections] = usePersistState('savedCollections', {
    collections: [],
    count: 0,
  });
  // Editing
  const collectionEditionInitialState = { name: '', status: 'create', tokens: [] };
  const [collectionInEdition, setCollectionInEdition] = useState(collectionEditionInitialState);
  // Collection select
  const [collectionSelected, setCollectionSelected] = useState('');

  // #Saved collections handlers
  const addToSavedCollections = ({ status, ...collection }) => {
    let newSavedCollections;
    let count;
    if (status === 'edit') {
      const collectionIndex = savedCollections.collections.findIndex(
        (col) => col.id === collection.id
      );

      newSavedCollections = [
        ...savedCollections.collections.slice(0, collectionIndex),
        { ...collection },
        ...savedCollections.collections.slice(collectionIndex + 1),
      ];
      count = savedCollections.count;
    } else {
      // add collection with id created
      newSavedCollections = [...savedCollections.collections, { ...collection, id: uuid() }];
      count = savedCollections.count + 1;
    }

    setSavedCollections({
      collections: newSavedCollections,
      count,
    });
    // Collection reset state
    setCollectionInEdition(collectionEditionInitialState);
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
    const [currentCol] = savedCollections.collections.filter(
      (_, index) => index === collectionIndex
    );

    setCollectionInEdition({ ...currentCol, status: 'edit' });
  };

  const handleChangeCollectionName = useCallback((name) => {
    setCollectionInEdition((prevState) => ({
      ...prevState,
      name,
    }));
  }, []);

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
    // # Saved list
    savedCollections,
    addToSavedCollections,
    removeFromSavedCollections,
    // # Selected
    collectionSelected,
    setCollectionSelected,
    // # Edition
    collectionInEdition,
    changeCollectionName: handleChangeCollectionName,
    addTokenToCollection,
    removeTokenFromCollection,
    selectCollectionToEdit,
  };

  return <CustomColProvider value={valueToProvider}>{children}</CustomColProvider>;
};

export default CustomCollectionProvider;
