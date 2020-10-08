import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/* 
Добавить словари на цвета - сделать элемент универсальным для label 'Front-end', 'Javascript'
Сделать размеры height/width/border-radius и пр. плавающими 
*/

const TagBack = styled('div')`
  height: ${(props) => props.theme.spacing(3) + 'px'};
  border-radius: ${(props) => props.theme.spacing(2) + 'px'};
  background: #d8e5fb;
  padding-left: ${(props) => props.theme.spacing(1.5) + 'px'};
  padding-right: ${(props) => props.theme.spacing(1.5) + 'px'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${(props) => props.theme.spacing(1) + 'px'};
`;

const TagText = styled('span')`
  color: #3c7eec;
  transform: translateY(-5%);
`;
export const Tag = ({ children, tagColor, textColor }) => {
  return (
    <TagBack>
      <TagText>{children}</TagText>
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
