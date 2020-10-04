import React from 'react';
import { useParams } from 'react-router';
import { useFirestoreRef } from 'hooks';
import { useCollection } from 'react-firebase-hooks/firestore';
import Box from 'components/atoms/Box';
import styled from 'styled-components';
import { LinkIcon } from 'components/atoms/LinkIcon';
import { UserTop } from 'components/molecules/UserTop';

export const Person = () => {
  const { name } = useParams();

  const ref = useFirestoreRef((db) =>
    db.collection('people').where('name', '==', name)
  );
  const [value, loading, error] = useCollection(ref);

  return (
    <Box>
      <StyledBackground></StyledBackground>
      <div>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value && value.docs.length === 0 && <span>Collection: Empty...</span>}
        {value && (
          <section>
            {value.docs.map((doc) => (
              <React.Fragment key={doc.id}>
                <UserTop doc={doc} />
                <h2>About</h2>
                <p>
                  I am a front-end developer with 10 years experience in web
                  development: from responsive web-sites to SPA and
                  micro-frontends. I strive to write pure, maintainable and well
                  documented code. Also I have got design skills and have been
                  working as a part-time UI/UX designer for 4 years and have a
                  passion to implement smooth animations to apps. Since 2019 I
                  have been conducting to several pet projects as an architect
                  and a full-stack developer.
                </p>
                <h2>Highlights</h2>
                <HighlightsContainer>
                  {data.map(rendererLambda)}
                </HighlightsContainer>
              </React.Fragment>
            ))}
          </section>
        )}
      </div>
    </Box>
  );
};

const rendererLambda = (item) => (
  <HightlightItem key={item.id} name={item.name} href={item.href} />
);

const data = [
  {
    id: '123',
    name: 'Game marketplace',
    href: 'https://gm-trade.ru',
  },
  {
    id: 'asd',
    name: 'Miro contest',
    href: 'https://miro.com',
  },
];

const HightlightItem = (props) => (
  <HighlightContainer>
    <h4>{props.name}</h4>
    <LinkIcon href={props.href} />
  </HighlightContainer>
);

const HighlightContainer = styled('div')`
  width: 336px;
  height: 216px;
  border-radius: 32px;
  padding: 24px 40px;
  margin-right: 24px;
  background: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HighlightsContainer = styled('div')`
  display: flex;
`;

const StyledBackground = styled('div')`
  background-color: #5f75ee;
  border-top-right-radius: ${(props) => props.theme.spacing(6)};
  border-bottom-right-radius: ${(props) => props.theme.spacing(6)};
  min-height: 40vh;
  width: 40%;
  flex-shrink: 0;
  margin-right: ${(props) => props.theme.spacing(5)};
  margin-top: ${(props) => props.theme.spacing(3)};
`;
