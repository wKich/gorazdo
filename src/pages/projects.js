import React from 'react';
import Card from '../components/organisms/Card';
import Blurry from '../components/atoms/Blurry';

const Projects = props => {
  return (
    <Blurry>
      <Card
        title="Business card"
        description="THe common business cards that you met the whole your life. We can use whatever paper you prefer"
      />
    </Blurry>
  );
};

export { Projects };
