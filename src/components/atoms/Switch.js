import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const flexIsOn = (props) => {
  if (props.isOn === true) {
    return 'translateX(12px)';
  }
  return 'translateX(0px)';
};

const SwitchBack = styled('div')`
  height: 24px;
  width: 36px;
  background: ${(props) => props.color};
  border-radius: 12px;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 4px;
  padding-right: 4px;
  background-position: center;
  margin-left: 4px;
  margin-right: 4px;
`;

const SwitchDot = styled('div')`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: white;
  transition: all 200ms;
  transform: ${flexIsOn};
`;

const SwitchWrapper = styled('div')`
  display: flex;
`;
// JSX
export const Switch = ({ isOn, color, onClick, label }) => {
  return (
    <SwitchWrapper>
      <span>{label}</span>
      <SwitchBack color={color} onClick={onClick}>
        <SwitchDot isOn={isOn} />
      </SwitchBack>
    </SwitchWrapper>
  );
};

Switch.propTypes = {
  label: PropTypes.string,
  isOn: PropTypes.bool,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Switch.defaultProps = {
  label: 'En',
  isOn: true,
  color: 'black',
};
