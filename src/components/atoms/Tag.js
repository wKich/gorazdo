import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/* 
Добавить словари на цвета - сделать элемент универсальным для label 'Front-end', 'Javascript'
Сделать размеры height/width/border-radius и пр. плавающими 
*/

const TagBack = styled('div')`
  height: 24px;
  width: 96px;
  border-radius: 16px;
  background: #d8e5fb;
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TagText = styled('span')`
  color: #3c7eec;
  transform: translateY(-5%);
`;
export const Tag = ({ label, tagColor, textColor }) => {
  return (
    <TagBack>
      <TagText>{label}</TagText>
    </TagBack>
  );
};

Tag.propTypes = {
  label: PropTypes.string,
  tagColor: PropTypes.string,
  textColor: PropTypes.string,
};

Tag.defaultProps = {
  label: 'Front-end',
  tagColor: '#D8E5FB',
  textColor: '#3C7EEC',
};
