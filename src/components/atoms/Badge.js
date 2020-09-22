import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SIZES_FACTORS = {
  small: 2,
  normal: 3,
  big: 6,
};

const FONT_SIZES_DICTIONARY = {
  small: '12px',
  normal: '14px',
  big: '18px',
};

const getHeight = (props) => SIZES_FACTORS[props.$size] * 8 + 'px';
const getHalfHeight = (props) => SIZES_FACTORS[props.$size] * 4 + 'px';

const BadgeBack = styled('div')`
  height: ${getHeight};
  padding-left: ${getHalfHeight};
  padding-right: ${getHalfHeight};
  border-radius: ${getHalfHeight};
  background: ${(props) => props.$bgColor};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => FONT_SIZES_DICTIONARY[props.$size]};
  font-weight: normal;
`;

const BadgeText = styled('span')`
  color: ${(props) => props.$color};
  transform: translateY(-5%);
`;

export const Badge = ({ label, badgeColor, textColor, size }) => {
  return (
    <BadgeBack $bgColor={badgeColor} $size={size}>
      <BadgeText $color={textColor}>{label}</BadgeText>
    </BadgeBack>
  );
};

Badge.propTypes = {
  size: PropTypes.oneOf(['small', 'normal', 'big']),
  label: PropTypes.string,
  badgeColor: PropTypes.string,
  textColor: PropTypes.string,
};

Badge.defaultProps = {
  size: 'normal',
  label: 'Javascript',
  badgeColor: '#FCDFD3',
  textColor: '#F15D23',
};
