import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import getStyle, { getStyleByProp } from 'utils/getStyle';
import { Button } from './Button';

/**
 * 1. Use Button as an atom, atoms/Button.js
 * 2. Move ContactForm to organisms/ContactForm (don't forget to rename the story)
 * 3. Create a new molecula for molecules/TypographyBlock.js
 */

const FormBox = styled('div')`
  width: 752px;
  height: 224px;
  border-radius: 16px;
  background-size: cover;
  background-position: center;
  background-color: #bdccff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 120px;
  padding-right: 80px;
`;

const Offer = styled('div')`
  height: 32px;
  left: 120px;
  bottom: 72px;
  margin: 4px;
  font-family: Calibri;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  color: #000000;
`;

const Descriptive = styled('div')`
  left: 120px;
  top: 72px;
  font-family: Calibri;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #1a1a1a;
  margin: 4px;
`;

const JustButton = styled('a')`
  width: 120px;
  height: 48px;
  border: none;
  border-radius: 4px;
  background-size: cover;
  background-position: center;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: grey;
  }
  &:active {
    transform: translateY(2px);
  }
  &:focus {
    box-shadow: 2px 2px 15px -7px ${(props) => props.$bgColor};
    outline: none;
  }
`;

export const ContactForm = ({
  buttonColor,
  buttonLabel,
  buttonTextColor,
  offerLabel,
  descriptive,
}) => {
  return (
    <FormBox>
      <div>
        <Offer>
          <span>{offerLabel}</span>
        </Offer>
        <Descriptive>
          <span>{descriptive}</span>
        </Descriptive>
      </div>
      <JustButton
        $bgColor={buttonColor}
        $color={buttonTextColor}
        href="mailto:pavepy@gmail.com"
      >
        {buttonLabel}
      </JustButton>
      <Button>Привет!</Button>
    </FormBox>
  );
};

ContactForm.propTypes = {
  buttonColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  buttonLabel: PropTypes.string,
  offerLabel: PropTypes.string,
  descriptive: PropTypes.string,
};

ContactForm.defaultProps = {
  buttonLabel: 'Email',
  buttonColor: 'black',
  buttonTextColor: 'white',
  offerLabel: 'Contact me',
  descriptive: 'If you want',
};
