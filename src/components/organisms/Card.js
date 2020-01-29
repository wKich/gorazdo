import React from "react";
import Box from "../atoms/Box";
import { MdAcUnit, MdAdd } from "react-icons/md";
import styled from "styled-components";
import Button from "../atoms/Button";

const CardWrapper = styled.div`
  padding: 1em;
  border: 5px solid black;
  text-align: left;
  background-color: white;
  max-width: 600px;
`;

const Icon = styled.span`
  font-size: 2.5em;
  margin-right: 0.25em;
`;

const Card = props => {
  return (
    <CardWrapper>
      <Box column>
        <h2>{props.title}</h2>
        <Box>
          <Icon>
            <MdAcUnit />
          </Icon>
          <p>{props.description}</p>
        </Box>
      </Box>
      <Button onClick={console.log}>
        <Box alignItems="center">
          <MdAdd />
          Add
        </Box>
      </Button>
    </CardWrapper>
  );
};

export default Card;
