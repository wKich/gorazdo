import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useFirestoreRef } from 'hooks';
import { Text } from 'components/atoms/Text';
import { Link } from 'react-router-dom';

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
      <Link to={`/people/${doc.get('name')}`}>
        <Text value={{ en: 'Profile', ru: 'Профиль' }} />
      </Link>
      <pre>{JSON.stringify(doc.data())}, </pre>
    </div>
  );
};
