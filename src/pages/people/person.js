import React from 'react';
import { useParams } from 'react-router';

export const Person = () => {
  const { name } = useParams();
  return <div>People: {name}</div>;
};
