import React from 'react';
import { FaLink } from 'react-icons/fa';
import styled from 'styled-components';

export const LinkIcon = (props) => (
  <IconOuter href={props.href} target="_blank">
    <IconInner>
      <FaLink />
    </IconInner>
  </IconOuter>
);

const IconInner = styled('div')`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 200ms;
`;

const IconOuter = styled('a')`
  width: 80px;
  border: none;
  height: 40px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  &:hover ${IconInner} {
    transform: translateX(100%);
  }
`;
