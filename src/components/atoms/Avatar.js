import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import getStyle, { getStyleByProp } from 'utils/getStyle';
import { makeStyle } from 'styles';

const StyledDiv = styled('div')`
  height: ${getStyleByProp('sizes', 'size')};
  width: ${makeStyle.sizes(10)};
  border-radius: 50%;
  border: 1px solid #000;
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
