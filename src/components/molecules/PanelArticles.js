import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Typography } from 'components/atoms/Typography';
import { Tag } from 'components/atoms/Tag';

const SquarePicture = styled('div')`
  height: 80px;
  width: 80px;
  border-radius: 16px;
  background: #e1e6eb;
`;

const PanelContainer = styled('div')`
  display: flex;
  height: 112px;
  width: 752px;
  border-radius: 16px;
  background: #f0f0f6;
  padding-left: 8px;
  padding-right: 8px;
  justify-content: space-around;
  align-items: center;
`;

const TextContainer = styled('div')`
  height: 80px;
  width: 616px;
  flex-direction: column;
`;

const StyledTitle = styled('div')`
  display: flex;
  justify-content: flex-start;
`;

const TagsContainer = styled('div')`
  display: flex;
  justify-content: space-between;
`;

const Date = styled('span')`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  align-self: baseline;
`;

const SecondLineContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

export const PanelArticles = ({}) => {
  return (
    <PanelContainer>
      <SquarePicture></SquarePicture>
      <TextContainer>
        <StyledTitle>
          {' '}
          <Typography variant="h400">
            Анонс новой версии Styled Components v5: Звериный оскал
          </Typography>
        </StyledTitle>
        <SecondLineContainer>
          <TagsContainer>
            <Tag>'Front-end'</Tag>
            <Tag>'React'</Tag>
          </TagsContainer>
          <Date>20.05.2020</Date>
        </SecondLineContainer>
      </TextContainer>
    </PanelContainer>
  );
};
