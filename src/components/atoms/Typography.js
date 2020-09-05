import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import getStyle, { getStyleByProp } from 'utils/getStyle';

const StyledComponent = styled('span')`
  display: block;
  color: ${getStyle('colors', 'font')};
  font-size: ${getStyleByProp('fontSize', 'variant')};
  line-height: ${getStyleByProp('lineHeight', 'variant')};
`;

export const Typography = ({ component, ...props }) => {
  return <StyledComponent as={component} {...props} />;
};

Typography.propTypes = {
  variant: PropTypes.oneOf([
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    'subtitle',
    'large',
    'medium',
    'normal',
    'small',
  ]),
};

Typography.defaultProps = {};
