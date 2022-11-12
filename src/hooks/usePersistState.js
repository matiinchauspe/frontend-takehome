import { useState, useEffect } from 'react';
import browserStorage from 'store';

/**
 * The first argument is the key that we'll use to store the data in the browser's local storage.
 * The second argument is the initial state
 * @param storageKey - The key that will be used to store the data in the browser.
 * @param initialState - The initial state of the data.
 */
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
