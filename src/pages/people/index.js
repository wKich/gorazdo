import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useFirestoreRef } from 'hooks';
import { Text } from 'components/atoms/Text';
import { Link } from 'react-router-dom';
import { useWhyDidYouUpdate } from 'hooks/useWhyDidYouUpdate';

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

const PersonCard = (props) => {
  const { doc } = props;
  return (
    <div>
      <h3>
        <Text doc={doc} path="firstName" />
        &nbsp;
        <Text doc={doc} path="lastName" />
      </h3>
      <Link to={`/people/${doc.get('name')}`}>
        <Text value={{ en: 'Profile', ru: 'Профиль' }} />
      </Link>
    </div>
  );
};
