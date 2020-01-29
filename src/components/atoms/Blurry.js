import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";

const StyledDiv = styled.div`
  padding: 20px;
  perspective: 600px;
`;
const getShift = props => {
  if (props.inView) {
    return null;
  }
  if (props.position === "top") {
    return css`
      transform: translateY(20px);
      box-shadow: 0 0 5px red;
    `;
  }
  if (props.position === "bottom") {
    return css`
      transform: translateY(-20px);
      box-shadow: 0 0 5px blue;
    `;
  }
};
const Blur = styled.div`
  transition: all 600ms;
  will-change: filter;
  transform-style: preserve-3d;
  filter: blur(${props => (props.inView ? 0 : "10px")});
`;

const Rotate = styled.div`
  transition: all 200ms;
  will-change: transform;
  ${getShift};
`;

const Blurry = ({ children }) => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.2,
    rootMargin: "-20% 0px"
  });

  let position = null;

  return (
    <StyledDiv ref={ref}>
      <Blur inView={inView}>
        <Rotate inView={inView} position={position}>
          {children}
        </Rotate>
      </Blur>
    </StyledDiv>
  );
};

export default Blurry;
