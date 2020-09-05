import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import getStyle, { getStyleByProp } from 'utils/getStyle';

const StyledDiv = styled('div')`
  width: ${getStyleByProp('sizes', 'size')};
  height: ${getStyleByProp('sizes', 'size')};
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-color: ${getStyle('colors', 'card')};
`;
export const Avatar = ({ url, size }) => {
  return <StyledDiv size={size} style={{ backgroundImage: `url(${url})` }} />;
};

Avatar.propTypes = {
  size: PropTypes.number,
};

Avatar.defaultProps = {
  url: '/logo192.png',
  size: 6,
};
