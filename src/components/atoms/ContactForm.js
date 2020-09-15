import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import getStyle, { getStyleByProp } from 'utils/getStyle';



const FormBox = styled('div')`
  width: 752px;
  height: 224px;
  border-radius: 16px;
  background-size: cover;
  background-position: center;
  background-color: #BDCCFF;
  display: flex;
  flex-direction: row; 
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
  color: #1A1A1A;
  margin: 4px;
`;

const FormButtonBox = styled('div')`
  width: 120px;
  height: 48px;
  border-radius: 4px;
  margin-top:88px;
  margin-bottom:88px;
  margin-right:80px;
  margin-left:120px;
  background-size: cover;
  background-position: center;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled('div')`
  position: static;
  height: 24px;
  left: 32px;
  right: 32px;
  font-family: Calibri;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
`;



export const ContactForm = ({ buttoncolor, 
                              buttonlabel, 
                              buttontextcolor,
                              offer, 
                              descriptive }) => {
  return (
  <FormBox> 
    <Offer><span>{offer}</span></Offer> 
    <Descriptive><span>{descriptive}</span></Descriptive>
    <FormButtonBox color = {buttoncolor}>
        <ButtonText color = {buttontextcolor}>
          <span> {buttonlabel} </span>
        </ButtonText>
    </FormButtonBox>
  </FormBox>
  );
};

ContactForm.propTypes = {
  buttoncolor: PropTypes.string,
  buttontextcolor: PropTypes.string,
  buttonlabel: PropTypes.string,
  offer: PropTypes.string,
  descriptive: PropTypes.string,
};

ContactForm.defaultProps = {
  buttonlabel: 'Email',
  buttoncolor: 'black',
  buttontextcolor: 'white',
  offer: 'Contact me',
  descriptive: 'If you want',
};
