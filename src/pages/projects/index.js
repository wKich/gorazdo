import React from 'react';
import Blurry from '../../components/atoms/Blurry';
import { useProjects } from '../../hooks';
import { TheGrid } from './components/TheGrid';
import { TheItem } from './components/TheItem';
import { ProjectCard } from './components/ProjectCard';

const byPublishedDate = (docA, docB) =>
  docB.get('published_on').seconds - docA.get('published_on').seconds;

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
    <TheGrid>
      {projectsSnapshot.docs.sort(byPublishedDate).map(doc => (
        <TheItem key={doc.id}>
          <Blurry>
            <ProjectCard doc={doc} />
          </Blurry>
        </TheItem>
      ))}
    </TheGrid>
  );
};

export { Projects };
