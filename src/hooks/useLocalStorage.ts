import { useCallback, useEffect, useState } from 'react';

/**
 * A custom React hook for managing state stored in the local storage or session storage of the browser.
 * @template T - The type of the state value.
 * @param {string} key - The key under which the value will be stored in the storage.
 * @param {T | (() => T)} initialValue - The initial value of the state, or a function that returns the initial value.
 * @param {'localStorage' | 'sessionStorage'} storageType - The type of storage to use.
 * @returns {[T, React.Dispatch<React.SetStateAction<T>>, () => void]}
 * A tuple containing the current value, a function to set the value, and a function to remove the value from storage.
 */
const useStorage = <T>(
  key: string,
  initialValue: T | (() => T),
  storageType: 'localStorage' | 'sessionStorage'
): [T, React.Dispatch<React.SetStateAction<T>>, () => void] => {
  const storageObject =
    storageType === 'localStorage'
      ? window.localStorage
      : window.sessionStorage;
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    }

    if (typeof initialValue === 'function') {
      return (initialValue as () => T)();
    }
    return initialValue;
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);

    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => setValue(undefined), []);

  return [value, setValue, remove];
};

/**
 * A custom React hook for managing state stored in the local storage of the browser.
 * @template T - The type of the state value.
 * @param {string} key - The key under which the value will be stored in the local storage.
 * @param {T | (() => T)} initialValue - The initial value of the state, or a function that returns the initial value.
 * @returns {[T, React.Dispatch<React.SetStateAction<T>>, () => void]}
 * A tuple containing the current value, a function to set the value, and a function to remove the value from local storage.
 */
export const useLocalStorage = <T>(
  key: string,
  initialValue: T | (() => T)
): [T, React.Dispatch<React.SetStateAction<T>>, () => void] => {
  return useStorage(key, initialValue, 'localStorage');
};

/**
 * A custom React hook for managing state stored in the session storage of the browser.
 * @template T - The type of the state value.
 * @param {string} key - The key under which the value will be stored in the session storage.
 * @param {T | (() => T)} initialValue - The initial value of the state, or a function that returns the initial value.
 * @returns {[T, React.Dispatch<React.SetStateAction<T>>, () => void]}
 * A tuple containing the current value, a function to set the value, and a function to remove the value from session storage.
 */
export const useSessionStorage = <T>(
  key: string,
  initialValue: T | (() => T)
): [T, React.Dispatch<React.SetStateAction<T>>, () => void] => {
  return useStorage(key, initialValue, 'sessionStorage');
};
