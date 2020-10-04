import React from 'react';
import styled from 'styled-components';

import { MdCancel } from 'react-icons/md';

const IconButton = styled.button`
  width: ${(props) => props.theme.spacing(2)};
  height: ${(props) => props.theme.spacing(2)};
  background-color: transparent;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: ${(props) => props.theme.spacing(1)};
  &:focus {
    outline: none;
  }
  /* custom */
  position: absolute;
  top: ${(props) => props.theme.spacing(2)};
  right: ${(props) => props.theme.spacing(2)};
`;

const Wrapper = styled.div`
  padding: ${(props) => props.theme.spacing(1, 3)};
  position: relative;
`;

const Inner = styled.div`
  background-color: ${(props) => props.theme.background.default};
  color: ${(props) => props.theme.palette.text.primary};
  border-radius: ${(props) => props.theme.spacing(1)};
  padding: ${(props) => props.theme.spacing(3)};
`;

const ServiceCard = (props) => {
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
