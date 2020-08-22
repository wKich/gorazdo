import React from 'react';
import { useParams } from 'react-router';
import { useFirestoreRef } from 'hooks';
import { useCollection } from 'react-firebase-hooks/firestore';

export const Person = () => {
  const { name } = useParams();

  const ref = useFirestoreRef((db) =>
    db.collection('people').where('name', '==', name)
  );
  const [value, loading, error] = useCollection(ref);

  return (
    <div>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {value && value.docs.length === 0 && <span>Collection: Empty...</span>}
      {value && (
        <section>
          {value.docs.map((doc) => (
            <React.Fragment key={doc.id}>
              {JSON.stringify(doc.data())}{' '}
            </React.Fragment>
          ))}
        </section>
      )}
    </div>
  );
};
