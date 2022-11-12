import { useState, useEffect } from 'react';
import browserStorage from 'store';

export const usePersistState = (storageKey, initialState) => {
  const [state, setInternalState] = useState(initialState);

  // Only on our initial load, retrieve the data from the store and set the state to that data.
  useEffect(() => {
    const storageInBrowser = browserStorage.get(storageKey);

    if (storageInBrowser) {
      setInternalState(storageInBrowser);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setState = (newState) => {
    browserStorage.set(storageKey, newState);
    setInternalState(newState);
  };

  return [state, setState];
};
