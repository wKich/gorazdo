import React from 'react';
import Blurry from '../../components/atoms/Blurry';
import { useProjects } from '../../hooks';
import { TheGrid } from './components/TheGrid';
import { TheItem } from './components/TheItem';
import { ProjectCard } from './components/ProjectCard';
import WelcomeTitle from '../../components/organisms/WelcomeTitle';
import { ThemeProvider } from 'styled-components';
import dark from 'styles/themes/dark';

const byPublishedDate = (docA, docB) =>
  docB.get('published_on').seconds - docA.get('published_on').seconds;

const Projects = (props) => {
  const [projectsSnapshot, loading, error] = useProjects();
  console.log(projectsSnapshot, loading, error);
  if (loading) {
    return (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '200px',
          textAlign: 'center',
          height: '50px',
          lineHeight: '50px',
          marginTop: '-25px',
          marginLeft: '-100px',
        }}
      >
        Loading...
      </div>
    );
  }
  if (error) {
    return 'error';
  }
  return (
    <>
      <WelcomeTitle />
      <h3
        style={{
          textAlign: 'center',
        }}
      >
        Our recent projects!
      </h3>
      <TheGrid>
        <ThemeProvider theme={dark}>
          {projectsSnapshot.docs.sort(byPublishedDate).map((doc) => (
            <TheItem key={doc.id}>
              <Blurry>
                <ProjectCard doc={doc} />
              </Blurry>
            </TheItem>
          ))}
        </ThemeProvider>
      </TheGrid>
    </>
  );
};

export { Projects };
