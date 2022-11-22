/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { v4 as uuid } from 'uuid';

import { CUSTOM_COLLECTION_STATUS } from '@constants';
import { CustomCollectionProvider as CustomColProvider } from '@context';
import { usePersistState } from '@hooks';

import { collectionEditionInitialState, savedCollectionsInitialState } from './initial-states';

const CustomCollectionProvider = ({ children }) => {
  // #Initial States
  // Custom collections
  const [savedCollections, setSavedCollections] = usePersistState(
    'savedCollections',
    savedCollectionsInitialState
  );
  // Editing
  const [collectionInEdition, setCollectionInEdition] = useState(collectionEditionInitialState);
  // Collection select
  const [collectionSelected, setCollectionSelected] = useState('');
  // Current tokens list
  const [currentTokensList, setCurrentTokensList] = useState([]);

  // #Saved collections handlers
  const addToSavedCollections = ({ status, ...collection }) => {
    let newSavedCollections;
    let count;
    if (status === CUSTOM_COLLECTION_STATUS.EDIT) {
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

    toast.success(
      <span>
        Collection <b>{collection.name}</b>{' '}
        {status === CUSTOM_COLLECTION_STATUS.EDIT ? 'modified' : 'saved'}!
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

    setCollectionInEdition({ ...currentCol, status: CUSTOM_COLLECTION_STATUS.EDIT });
  };

  const handleChangeCollectionName = useCallback((name) => {
    setCollectionInEdition((prevState) => ({
      ...prevState,
      name,
    }));
  }, []);

  const addTokenToCollection = useCallback(
    (tokenId) => {
      const [token] = currentTokensList.filter((t) => t.id === tokenId);

      setCollectionInEdition((prevState) => ({
        ...prevState,
        tokens: [...prevState.tokens, token],
      }));
    },
    [currentTokensList]
  );

  const removeTokenFromCollection = (tokenId) => {
    const newTokenList = collectionInEdition.tokens.filter((t) => t.id !== tokenId);

    setCollectionInEdition((prevState) => ({
      ...prevState,
      tokens: newTokenList,
    }));
  };

  const valueToProvider = useMemo(
    () => ({
      // #Collections saved list
      savedCollections,
      addToSavedCollections,
      removeFromSavedCollections,
      // #Collection select
      collectionSelected,
      setCollectionSelected,
      // #Current tokens list
      setCurrentTokensList,
      currentTokensList,
      // # Edition
      collectionInEdition,
      changeCollectionName: handleChangeCollectionName,
      addTokenToCollection,
      removeTokenFromCollection,
      selectCollectionToEdit,
    }),
    [
      collectionInEdition,
      collectionSelected,
      savedCollections,
      currentTokensList,
      setCurrentTokensList,
    ]
  );

  return <CustomColProvider value={valueToProvider}>{children}</CustomColProvider>;
};

export default CustomCollectionProvider;
