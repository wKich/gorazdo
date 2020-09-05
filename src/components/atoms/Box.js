import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledBox = styled.div`
  flex-wrap: ${(props) => (props.nowrap ? 'nowrap' : undefined)};
  display: ${(props) => (props.inline ? 'inline-flex' : 'flex')};
  flex-direction: ${(props) => (props.column ? 'column' : undefined)};
  flex-wrap: ${(props) => (props.wrap ? 'wrap' : undefined)};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justify};
  width: ${(props) => (props.fullWidth ? '100%' : undefined)};
  height: ${(props) => (props.fullHeight ? '100%' : undefined)};
`;

const Box = (props) => <StyledBox {...props} />;

Box.propTypes = {
  // size properties
  grow: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  shrink: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  basis: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fullHeight: PropTypes.bool,
  fullWidth: PropTypes.bool,
  // behavior
  nowrap: PropTypes.bool,
  wrap: PropTypes.bool,
  column: PropTypes.bool,
  // alignment
  justify: PropTypes.string,
  alignItems: PropTypes.string,
};
Box.defaultProps = {
  inline: undefined,
  column: undefined,
  fullHeight: undefined,
  fullWidth: undefined,
  wrap: undefined,
  grow: null,
  shrink: null,
  zIndex: null,
  basis: null,
  justify: null,
  alignItems: null,
};
export default Box;
