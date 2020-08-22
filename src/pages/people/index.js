import React from 'react';
import { useParams } from 'react-router';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useFirestoreRef } from 'hooks';
import { Text } from 'components/atoms/Text';

export const People = () => {
  const ref = useFirestoreRef((db) => db.collection('people'));
  const [value, loading, error] = useCollection(ref);
  return (
    <div>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {value && (
        <section>
          {value.docs.map((doc) => (
            <PersonCard key={doc.id} doc={doc} />
          ))}
        </section>
      )}
    </div>
  );
};

const PersonCard = ({ doc }) => {
  const firstName = doc.get('firstName');
  const lastName = doc.get('lastName');

  return (
    <div>
      <h3>
        <Text value={firstName} />
        &nbsp;
        <Text value={lastName} />
      </h3>
      <pre>{JSON.stringify(doc.data())}, </pre>
    </div>
  );
};
