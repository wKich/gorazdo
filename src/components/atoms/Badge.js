import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BadgeBack = styled('div')`
  width: auto;
  height: 24px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 12px;
  background: ${(props) => props.$bgColor};
  display: inline-block;
`;

const BadgeText = styled('div')`
  display: flex;
  color: ${(props) => props.$color};
  margin: 4, 12, 4;
  align-items: center;

  justify-content: center;
  font-size: 14px;
  font-weight: normal;
`;
export const Badge = ({ label, badgeColor, textColor }) => {
  return (
    <BadgeBack $bgColor={badgeColor}>
      <BadgeText $color={textColor}>
        <span>{label}</span>
      </BadgeText>
    </BadgeBack>
  );
};

Badge.propTypes = {
  label: PropTypes.string,
  badgeColor: PropTypes.string,
  textColor: PropTypes.string,
};

Badge.defaultProps = {
  label: 'JavaScript',
  badgeColor: '#FCDFD3',
  textColor: '#F15D23',
};
