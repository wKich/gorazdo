import { useState } from 'react';

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
    sessionSet(key, value);
    setState(value);
  };

  return [state, setSessionStorageState];
};
