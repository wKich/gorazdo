import React from 'react';
import styled from 'styled-components';
import getStyle from '../../../utils/getStyle';
import Button from '../../atoms/Button';

const Header = styled.div`
  padding: 2rem;
  border-radius: 1rem 1rem 0 0;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

const ServiceHeader = props => {
  return (
    <Header>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <h4>€{props.price}</h4>
      <Button onClick={props.onClick}>Buy now</Button>
    </Header>
  );
};

ServiceHeader.defaultProps = {
  title: 'Basic',
  description: 'The best one to start',
  price: 1000,
  discount: 30,
  onClick: e => alert('Hooray!'),
};

export default ServiceHeader;
