import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import getStyle from '../../utils/getStyle';
import canvas from '../../canvas';
import { MdCancel } from 'react-icons/md';

const IconButton = styled.button`
  width: ${getStyle('sizes', 3)};
  height: ${getStyle('sizes', 3)};
  background-color: transparent;
  border: none;
  color: white;
  border-radius: ${getStyle('radii', 2)};
`;

const Wrapper = styled.div`
  padding: ${getStyle('space', 3)};
  position: relative;
`;

const Inner = styled.div`
  background-color: ${getStyle('colors', 'card')};
  color: white;
  border-radius: ${getStyle('radii', 2)};
  padding: ${getStyle('space', 3)};
`;

const StyledCanvas = styled.canvas`
  width: ${getStyle('sizes', 6)};
  height: ${getStyle('sizes', 3)};
`;

const ServiceCard = props => {
  const { index, data, onClose } = props;
  const { albumId, id, title, url, thumbnailUrl } = data;
  const canvasRef = useRef(null);
  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    canvas(ctx);
  }, []);
  return (
    <Wrapper>
      <Inner>
        <h4>{title.slice(0, 14)}</h4>
        <p>{title}</p>
      </Inner>
      <IconButton onClick={onClose} title="Close">
        <MdCancel />
      </IconButton>
      <StyledCanvas ref={canvasRef} />
    </Wrapper>
  );
};

export default ServiceCard;
