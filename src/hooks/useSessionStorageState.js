import { useState, useEffect } from 'react';

const sessionGet = (key) => {
  return JSON.parse(window.sessionStorage.getItem(key));
};

const sessionSet = (key, value) => {
  window.sessionStorage.setItem(key, JSON.stringify(value));
};

export const useSessionStorageState = (defaultValue, key) => {
  const stateDefaultValue = sessionGet(key) ?? defaultValue;
  const [state, setState] = useState(stateDefaultValue);

  const setSessionStorageState = (value) => {
    setState(value);
  };
  useEffect(() => {
    sessionSet(key, state);
  }, [key, state]);

  return [state, setSessionStorageState];
};
