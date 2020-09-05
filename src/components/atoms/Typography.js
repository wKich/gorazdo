import React from 'react';
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

Typography.defaultProps = {
  component: 'span',
  variant: 900,
};
