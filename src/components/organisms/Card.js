import React from "react";
import Box from "../atoms/Box";
import { MdAcUnit } from "react-icons/md";
import styled from "styled-components";

const CardWrapper = styled.div`
  padding: 2em;
  border: 5px solid black;
  text-align: left;
  max-width: 600px;
`;

const Icon = styled.span`
  font-size: 2em;
  float: left;
`;

const Card = props => {
  return (
    <CardWrapper>
      <Box column>
        <Box>
          <h2>
            <Icon>
              <MdAcUnit />
            </Icon>
            {props.title}
          </h2>
        </Box>
        <p>{props.description}</p>
      </Box>
    </CardWrapper>
  );
};

export default Card;
