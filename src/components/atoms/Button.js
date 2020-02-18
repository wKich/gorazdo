import React from 'react';
import styled from 'styled-components';
import getStyle from '../../utils/getStyle';

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: ${getStyle('radii', 2)};
  &:focus {
    outline: none;
  }
`;
export default Button;
