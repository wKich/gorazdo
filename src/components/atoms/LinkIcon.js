import React from 'react';
import { FaLink } from 'react-icons/fa';
import styled from 'styled-components';
import getStyle from 'utils/getStyle';

export const LinkIcon = (props) => (
  <IconOuter href={props.href} target="_blank">
    <IconInner>
      <FaLink />
    </IconInner>
  </IconOuter>
);

const IconInner = styled('div')`
  height: 100%;
  width: 50%;
  border-radius: inherit;
  background: gray;
  color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 200ms;
`;

const IconOuter = styled('a')`
  display: block;
  cursor: pointer;
  height: ${getStyle('sizes', 5)};
  width: ${getStyle('sizes', 10)};
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  &:hover ${IconInner} {
    transform: translateX(100%);
  }
`;
