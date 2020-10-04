import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled('div')`
  width: ${(props) => props.theme.spacing(props.size)};
  height: ${(props) => props.theme.spacing(props.size)};
  border-radius: 50%;
  border: 1px solid #000;
  background-size: cover;
  background-position: center;
  background-color: ${(props) => props.theme.background.default};
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
