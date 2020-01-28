import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 20px;
`;
const getShift = props => {
  if (props.inView) {
    return null;
  }
};
const AnimationWrapper = styled.div`
  transition: all 600ms;
  will-change: transform, filter;
  transform-style: preserve-3d;
  transform: ${getShift};
  filter: blur(${props => (props.inView ? 0 : "10px")});
`;

const Blurry = ({ children }) => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.2,
    rootMargin: "-20% 0px"
  });

  let position = null;
  if (ref.current) {
    console.log(ref.current.offsetTop);
  }

  return (
    <StyledDiv ref={ref}>
      <AnimationWrapper inView={inView} position={position}>
        {children}
      </AnimationWrapper>
    </StyledDiv>
  );
};

export default Blurry;
