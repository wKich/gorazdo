import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import getStyle, { getStyleByProp } from 'utils/getStyle';

const StyledComponent = styled('span')`
  display: block;
  color: ${getStyle('colors', 'font')};
  font-size: ${getStyleByProp('fontSizes', 'variant')};
  line-height: ${getStyleByProp('lineHeights', 'variant')};
`;

export const Typography = ({ component, ...props }) => {
  return <StyledComponent as={component} {...props} />;
};

Typography.propTypes = {
  variant: PropTypes.oneOf([
    'title',
    'subtitle',
    'small',
    'normal',
    'medium',
    'large',
    'h100',
    'h200',
    'h300',
    'h400',
    'h500',
    'h600',
    'h700',
    'h800',
    'h900',
  ]),
};

Typography.defaultProps = {};
