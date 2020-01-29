import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 2px solid black;
  padding: 0 0.5em;
  cursor: pointer;
  margin: 0;
  background: none;
`;

const Button = props => {
  return <StyledButton {...props} />;
};
export default Button;
