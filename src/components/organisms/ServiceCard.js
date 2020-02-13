import React from 'react';
import styled from 'styled-components';
import getStyle from '../../utils/getStyle';
import { MdCancel } from 'react-icons/md';

const IconButton = styled.button`
  width: ${getStyle('sizes', 2)};
  height: ${getStyle('sizes', 2)};
  background-color: transparent;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: ${getStyle('radii', 2)};
  &:focus {
    outline: none;
  }
  /* custom */
  position: absolute;
  top: ${getStyle('space', 2)};
  right: ${getStyle('space', 2)};
`;

const Wrapper = styled.div`
  padding: ${getStyle('space', 1)} ${getStyle('space', 3)};
  position: relative;
`;

const Inner = styled.div`
  background-color: ${getStyle('colors', 'card')};
  color: ${getStyle('colors', 'font')};
  border-radius: ${getStyle('radii', 2)};
  padding: ${getStyle('space', 3)};
`;

const ServiceCard = props => {
  const { data, onClose } = props;
  const { title, description } = data;
  const displayDescription = description || `A nice description for "${title}"`;
  return (
    <Wrapper>
      <Inner>
        <h4>{title}</h4>
        <p>{displayDescription}</p>
      </Inner>
      {onClose && (
        <IconButton onClick={onClose} title="Remove">
          <MdCancel />
        </IconButton>
      )}
    </Wrapper>
  );
};

export default ServiceCard;
