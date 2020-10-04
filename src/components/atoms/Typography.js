import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledComponent = styled('span')`
  display: block;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.palette.text.primary};
  font-size: ${(props) => props.theme.typography[props.variant].fontSize};
  line-height: ${(props) => props.theme.typography[props.variant].lineHeight};
`;

export const Typography = ({ component, ...props }) => {
  return <StyledComponent as={component} {...props} />;
};

Typography.propTypes = {
  variant: PropTypes.oneOf([
    'body1',
    'body2',
    'button',
    'caption',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
  ]),
};

Typography.defaultProps = {};
