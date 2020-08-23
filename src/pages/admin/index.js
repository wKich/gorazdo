import React, { useEffect, useRef, useContext, useState } from 'react';
import { FirebaseAuthUIContext } from 'contexts/FirebaseAuth';

export const Admin = () => {
  const [showAuth, setShowAuth] = useState(false);
  if (!showAuth) {
    return <button onClick={() => setShowAuth(true)}>Authorize</button>;
  }
  return (
    <>
      <FirebaseAuthContent />
    </>
  );
};

export const FirebaseAuthContent = ({}) => {
  const auth = window.firebase.auth;
  const user = window.firebase.auth().currentUser;
  const ref = useRef();
  const { authUIInstance, config, init } = useContext(FirebaseAuthUIContext);
  useEffect(() => {
    if (authUIInstance === null) {
      init(auth());
    }
  }, [auth, authUIInstance, init]);
  useEffect(() => {
    if (authUIInstance && ref.current && config) {
      authUIInstance.start(ref.current, config);
    }
  }, [authUIInstance, config]);
  if (user) {
    return null;
    // (
    //   <div>
    //     <Button onClick={() => auth.signOut()}>Выйти</Button>
    //   </div>
    // );
  }
  return <div ref={ref} />;
};
