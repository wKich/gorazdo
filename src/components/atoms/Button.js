import React from 'react';
import styled from 'styled-components';
import getStyle from '../../utils/getStyle';

const StyledButton = styled.button`
  border: 2px solid black;
  padding: ${getStyle('space', 1)} 0;
  cursor: pointer;
  background: transparent;
  border: none;
  color: white;
  min-width: ${getStyle('sizes', 4)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: ${getStyle('radii', 2)};
  background-color: ${getStyle('colors', 'primary.primary')};
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${getStyle('colors', 'primary.primary', (color) =>
      color.lighten(0.1)
    )};
  }
  &:active {
    background-color: ${getStyle('colors', 'primary.primary', (color) =>
      color.lighten(0.2)
    )};
  }
`;
export default StyledButton;

export const Button = (props) => {
  return <StyledButton {...props} />;
};
