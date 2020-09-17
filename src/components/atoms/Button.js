import React from 'react';
import styled from 'styled-components';
import getStyle from '../../utils/getStyle';

const getButtonColor = (buttonThemeProperty) => {
  console.log(getButtonColor, buttonThemeProperty);
  return (props) => {
    console.log(props);
    return props.theme.buttons[props.palette][buttonThemeProperty];
  };
};

const StyledButton = styled.button`
  border: 2px solid black;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 16px;
  border-radius: 4px;
  color: ${getButtonColor('color')};
  background-color: ${getButtonColor('background')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
  }
  &:active {
  }
`;
export default StyledButton;

export const Button = (props) => {
  console.log(props);
  return <StyledButton {...props} />;
};
