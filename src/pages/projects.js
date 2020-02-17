import React, { useMemo } from 'react';
import Card from '../components/organisms/Card';
import Blurry from '../components/atoms/Blurry';
import { useProjects } from '../hooks';
import styled from 'styled-components';
import getStyle from '../utils/getStyle';

const byPublishedDate = (docA, docB) =>
  docB.get('published_on').seconds - docA.get('published_on').seconds;

const Background = styled('div').attrs(props => ({
  style: { backgroundImage: `url(${props.cover})` },
}))`
  position: absolute;
  left: 0%;
  top: 0;
  right: 0;
  bottom: 0;
  will-change: transform;
  transition: 200ms transform;
  transform-origin: 20% center;
  transform: scale(1.2);
  background-size: 100%;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  border-radius: ${getStyle('space', 3)};
  padding: ${getStyle('space', 3)};
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5)
  );
`;

const Wrapper = styled.div`
  border-radius: ${getStyle('space', 3)};
  background-color: ${getStyle('colors', 'card')};
  width: ${getStyle('sizes', 15)};
  height: ${getStyle('sizes', 10)};
  position: relative;
  overflow: hidden;
  perspective: 500px;

  :hover ${Background} {
    transform: scale(1.2) rotate3d(0, 1, 0, 7deg) translateX(-6px);
  }
  ::after {
    top: ${getStyle('space', 1)};
    left: ${getStyle('space', 1)};
    right: ${getStyle('space', 1)};
    bottom: ${getStyle('space', 1)};
    border-radius: ${getStyle('space', 2)};
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 0 20px rgba(0, 0, 0, 0.6);
    content: '';
    position: absolute;
  }
`;

const ProjectCard = ({ doc }) => {
  console.log(doc.data());
  return (
    <Wrapper>
      <Content>
        <h2>{doc.get('name')}</h2>
      </Content>
      <Background cover={doc.get('covers.808') || doc.get('covers.max_808')} />
    </Wrapper>
  );
};

const Projects = props => {
  const [projectsSnapshot, loading, error] = useProjects();
  console.log(projectsSnapshot, loading, error);
  if (loading) {
    return 'loading...';
  }
  if (error) {
    return 'error';
  }
  return (
    <div>
      {projectsSnapshot.docs.sort(byPublishedDate).map(doc => (
        <Blurry key={doc.id}>
          <ProjectCard doc={doc} />
        </Blurry>
      ))}
    </div>
  );
};

export { Projects };
