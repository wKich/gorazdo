import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 20px;
`;

const AnimationWrapper = styled.div`
  transition: all 600ms;
  transform: translateY(${props => (props.inView ? 0 : "-20px")});
  filter: blur(${props => (props.inView ? 0 : "10px")});
`;

const Blurry = ({ children }) => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.2,
    rootMargin: "-20% 0px"
  });

  return (
    <StyledDiv ref={ref}>
      <AnimationWrapper inView={inView}>{children}</AnimationWrapper>
    </StyledDiv>
  );
};

export default Blurry;
