import { useEffect, useState, useReducer, useMemo } from 'react';

const getFirebase = () => {
  const isFirebaseAvailable = typeof firebase !== 'undefined';
  if (isFirebaseAvailable) {
    return window.firebase;
  }
  return null;
};

const getFirebaseAppInstance = () => {
  try {
    const isFirebaseAvailable = typeof firebase !== 'undefined';
    if (isFirebaseAvailable) {
      // eslint-disable-next-line no-undef
      const app = firebase.app();
      return app;
    }
    return null;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export const useFirebaseApp = () => {
  const defaultValue = getFirebaseAppInstance();
  const [firebaseInstance, setFirebaseInstance] = useState(defaultValue);
  useEffect(() => {
    const app = getFirebaseAppInstance();
    if (app) {
      setFirebaseInstance(app);
    }
    const callback = (event) => {
      try {
        const app = getFirebaseAppInstance();
        const features = Array.from(app.container.providers.keys());
        setFirebaseInstance(app);
        console.log(`Firebase SDK loaded with ${features.join(', ')}`);
      } catch (error) {
        console.error(error);
        setFirebaseInstance(null);
      }
    };
    document.addEventListener('DOMContentLoaded', callback);
    return () => document.removeEventListener('DOMContentLoaded', callback);
  }, []);
  return firebaseInstance;
};

export const useFirebase = () => {
  const [firebase, setFirebase] = useState(window.firebase || null);
  useEffect(() => {
    if ('firebase' in window) {
      setFirebase(window.firebase);
    }
    const callback = (event) => {
      setFirebase(window.firebase);
    };
    document.addEventListener('DOMContentLoaded', callback);
    return () => document.removeEventListener('DOMContentLoaded', callback);
  }, []);
  return firebase;
};

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        payload: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      throw new Error();
  }
};

const useFirestoreGet = (fn) => {
  const ref = useFirestoreRef(fn);
  const [aborted, setAborted] = useState(false);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    loading: true,
    error: null,
    payload: null,
  });
  useEffect(() => {
    if (ref) {
      fetchData({ ref, dispatch, aborted });
    }
    return () => {
      setAborted(true);
    };
  }, [aborted, ref]);
  return [state.payload, state.loading, state.error];
};

const useServices = (locale = 'en') => {
  // .where('locale', '==', locale)
  const memoFn = useMemo(() => {
    return (db) => db.collection('services');
  }, []);
  return useFirestoreGet(memoFn);
};

const useProjects = () => {
  const fn = useMemo(
    () => (db) => db.collection('projects').where('privacy', '==', 'public'),
    []
  );
  return useFirestoreGet(fn);
};

export const useFirestoreRef = (fn) => {
  const firebase = useFirebaseApp();
  const ref = useMemo(() => (firebase ? fn(firebase.firestore()) : null), [
    firebase,
    fn,
  ]);
  return ref;
};

export { useServices, useProjects, useFirestoreGet };

const fetchData = async ({ aborted, dispatch, ref }) => {
  dispatch({
    type: 'FETCH_INIT',
  });
  try {
    const result = await ref.get();

    if (!aborted) {
      dispatch({
        type: 'FETCH_SUCCESS',
        payload: result,
      });
    }
  } catch (error) {
    if (!aborted) {
      dispatch({
        type: 'FETCH_INIT',
        payload: error.message,
      });
    }
  }
};
