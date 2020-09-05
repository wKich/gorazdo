import React from 'react';
import styled from 'styled-components';
import getStyle from 'utils/getStyle';

const StyledDiv = styled('div')`
  width: ${getStyle('sizes', 4)};
  height: ${getStyle('sizes', 4)};
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-color: ${getStyle('colors', 'card')};
`;
export const Avatar = ({ url }) => {
  return <StyledDiv style={{ backgroundImage: `url(${url})` }} />;
};

Avatar.defaultProps = {
  url: '/logo192.png',
};
