import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

const myProps = {
  myProp: 'Hi',
  children: 'Привет!',
};

export const ContactForm = (props) => {
  const {
    color,
    buttonColor,
    buttonLabel,
    buttonTextColor,
    offerLabel,
    descriptive,
  } = props;

  return (
    <FormBox>
      <Button palette="accent">Привет!</Button>
      <div>
        <Offer>
          <span>{offerLabel}</span>
        </Offer>
        <Descriptive>
          <span>{descriptive}</span>
        </Descriptive>
      </div>
    </FormBox>
  );
};

ContactForm.propTypes = {
  color: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  buttonLabel: PropTypes.string,
  offerLabel: PropTypes.string,
  descriptive: PropTypes.string,
};

const RED_COLOR = 'red';
ContactForm.defaultProps = {
  color: RED_COLOR,
  buttonLabel: 'Email',
  buttonColor: 'black',
  buttonTextColor: 'white',
  offerLabel: 'Contact me',
  descriptive: 'If you want',
};
