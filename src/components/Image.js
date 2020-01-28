import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 20px;
  padding-bottom: 20px;
  position: relative;
  overflow: hidden;
`;

const BlurryImage = styled.img`
  filter: blur(20px) contrast(150%);
  position: absolute;
  left: 0;
  transform: scale(1.2);
  top: 0;
  width: 100%;
`;

const TheImage = styled.img`
  position: relative;
  z-index: 2;
  /* box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2); */
`;

const Image = ({ src }) => {
  return (
    <StyledDiv>
      <BlurryImage src={src} />
      <TheImage src={src} alt="Something" />
    </StyledDiv>
  );
};

export default Image;
