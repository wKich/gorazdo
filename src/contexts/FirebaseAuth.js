import React, { createContext, useState, useEffect, useRef } from 'react';
import { useFirebaseApp } from 'hooks';
export const FirebaseAuthUIContext = createContext();

const setClose = () => console.log('Auth bar is closing');

const useFirebaseui = () => {
  const [firebaseui, setFirebaseui] = useState(window.firebaseui || null);
  useEffect(() => {
    if (window.firebaseui) {
      setFirebaseui(window.firebaseui);
    }
    document.getElementById('firebaseUIScript').onload = () => {
      setFirebaseui(window.firebaseui);
    };
  }, []);
  return firebaseui;
};

export const FirebaseAuthUIProvider = (props) => {
  const firebaseui = useFirebaseui();
  const firebaseApp = useFirebaseApp();
  const [authUIInstance, setAuthUIInstance] = useState(null);

  const ref = useRef();
  const config = useConfig(firebaseApp, firebaseui);

  useEffect(() => {
    if (!firebaseApp || !firebaseui) {
      return;
    }
    const unsubscribe = window.firebase.auth().onAuthStateChanged((user) => {
      const now = Boolean(user);
      const then = Boolean(ref.current);
      if (now === false && then) {
        authUIInstance.reset();
        setClose();
      }
      if (now ^ then) {
        setClose();
      }

      ref.current = Boolean(user);
    });
    return unsubscribe;
  }, [authUIInstance, firebaseApp, firebaseui]);

  const value = {
    authUIInstance,
    config,
    init: async (auth) => {
      const { AuthUI } = firebaseui.auth;
      const instance = AuthUI.getInstance() || new AuthUI(auth);
      setAuthUIInstance(instance);
      if (config.signInFlow === 'popup') {
        instance.reset();
      }
    },
  };

  return <FirebaseAuthUIContext.Provider {...props} value={value} />;
};

const useConfig = (firebaseApp, firebaseui) => {
  if (!firebaseApp) {
    return null;
  }

  const {
    GoogleAuthProvider,
    EmailAuthProvider,
  } = firebaseApp.container.providers.get('auth').component.serviceProps;
  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/success',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      GoogleAuthProvider.PROVIDER_ID,
      {
        provider: EmailAuthProvider.PROVIDER_ID,
        accountChooserEnabled: false,
      },
      firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    tosUrl: '/terms-of-service',
    // Privacy policy url/callback.
    privacyPolicyUrl() {
      window.location.assign('/privacy-policy');
    },
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  };
  return uiConfig;
};
