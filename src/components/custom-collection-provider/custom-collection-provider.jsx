import { useState, useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { v4 as uuid } from 'uuid';

import { Constants } from '@utils';
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
  const collectionEditionInitialState = {
    name: '',
    status: Constants.CUSTOM_COLLECTION_STATUS.CREATE,
    tokens: [],
  };
  const [collectionInEdition, setCollectionInEdition] = useState(collectionEditionInitialState);
  // Collection select
  const [collectionSelected, setCollectionSelected] = useState('');

  // #Saved collections handlers
  const addToSavedCollections = ({ status, ...collection }) => {
    let newSavedCollections;
    let count;
    if (status === Constants.CUSTOM_COLLECTION_STATUS.EDIT) {
      const collectionIndex = savedCollections.collections.findIndex(
        (col) => col.id === collection.id
      );

      newSavedCollections = [
        ...savedCollections.collections.slice(0, collectionIndex),
        { ...collection },
        ...savedCollections.collections.slice(collectionIndex + 1),
      ];
      console.log({ collectionsFromEdit: newSavedCollections });
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

    toast.success(
      <span>
        Collection <b>{collection.name}</b>{' '}
        {status === Constants.CUSTOM_COLLECTION_STATUS.EDIT ? 'modified' : 'saved'}!
      </span>
    );
  };

  const removeFromSavedCollections = (collectionId) => {
    // To show collection removed name!
    const currentSavedCollections = savedCollections.collections;

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
    // Collection reset state
    setCollectionInEdition(collectionEditionInitialState);

    toast.success(
      <span>
        {/* eslint-disable-next-line  */}
        Collection <b>{currentSavedCollections[collectionIndex].name}</b> removed!
      </span>
    );
  };

  // #Edition - When we want to edit a particular collection
  const selectCollectionToEdit = (collectionId) => {
    const collectionIndex = savedCollections.collections.findIndex(
      (col) => col.id === collectionId
    );
    const [currentCol] = savedCollections.collections.filter(
      (_, index) => index === collectionIndex
    );

    setCollectionInEdition({ ...currentCol, status: Constants.CUSTOM_COLLECTION_STATUS.EDIT });
  };

  const handleChangeCollectionName = useCallback((name) => {
    setCollectionInEdition((prevState) => ({
      ...prevState,
      name,
    }));
  }, []);

  const addTokenToCollection = useCallback((token) => {
    setCollectionInEdition((prevState) => ({
      ...prevState,
      tokens: [...prevState.tokens, token],
    }));
  }, []);

  const removeTokenFromCollection = (tokenId) => {
    const tokenIndex = collectionInEdition.tokens.findIndex((t) => t.id === tokenId);
    const newTokenList = collectionInEdition.tokens.filter((_, index) => index !== tokenIndex);

    setCollectionInEdition((prevState) => ({
      ...prevState,
      tokens: newTokenList,
    }));
  };

  const valueToProvider = useMemo(
    () => ({
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
    }),
    [collectionInEdition, collectionSelected, savedCollections]
  );

  return <CustomColProvider value={valueToProvider}>{children}</CustomColProvider>;
};

export default CustomCollectionProvider;
