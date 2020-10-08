import React, { useRef } from 'react';
import styled from 'styled-components';

import Button from '../../../components/atoms/Button';
import {
  HOVER_DURATION,
  CARD_WIDTH,
  RETURN_DURATION,
  DELAY,
  DOUBLED_DELAY,
} from '../constants';
import { Content } from './Content';
import { MdOpenInNew } from 'react-icons/md';
import { useDebounce, useMouseTrack } from '../hooks';
const StyledHeader = styled('h2')`
  padding-right: ${(props) => props.theme.spacing(5)};
`;

const BackgroundWrapper = styled.div`
  transform: scale(1.5);
  position: absolute;
  left: 0%;
  top: 0;
  right: 0;
  bottom: 0;
  /* transition: transform ${RETURN_DURATION} ease-out ${DOUBLED_DELAY}; */
`;

const Background = styled('div').attrs((props) => ({
  style: {
    backgroundImage: `url(${props.cover})`,
    transform: `translateX(${-props.x}px) translateY(${-props.y}px)`,
  },
}))`
  height: 100%;
  width: 100%;
  will-change: transform;
  border-radius: ${(props) => props.theme.spacing(1)};
  background-size: 140%;
  background-repeat: no-repeat;
  transition: transform ${HOVER_DURATION} ease-out;
  /* transition: transform ${RETURN_DURATION} ease-out ${DELAY}; */
`;

const toDegree = (value, maxAbsoluteValue = 45, range = [-50, 50]) => {
  const [min, max] = range;
  const pool = Math.abs(min) + Math.abs(max);

  return (value / pool) * maxAbsoluteValue * 2;
};

const InnerWrapper = styled.div.attrs((props) => ({
  style: {
    transform: `rotateY(${toDegree(props.x, 20)}deg) rotateX(${-toDegree(
      props.y,
      20
    )}deg)`,
  },
}))`
  border-radius: ${(props) => props.theme.spacing(3)};
  background-color: ${(props) => props.theme.background.default};
  overflow: hidden;
  position: relative;
  height: 100%;
  /* transition: transform ${RETURN_DURATION} ease-out ${DELAY}; */
  transition: transform ${HOVER_DURATION} ease-out;
  :hover {
    transition: transform ${HOVER_DURATION} ease-out;
  }
  ::after {
    top: ${(props) => props.theme.spacing(1)};
    left: ${(props) => props.theme.spacing(1)};
    right: ${(props) => props.theme.spacing(1)};
    bottom: ${(props) => props.theme.spacing(1)};
    border-radius: ${(props) => props.theme.spacing(2)};
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 0 20px rgba(0, 0, 0, 0.6);
    content: '';
    position: absolute;
  }
`;

const ButtonTransformer = styled('div').attrs((props) => ({
  style: {
    transform: `translateX(${-props.x * 0.4}px) translateY(${
      -props.y * 0.4
    }px)`,
  },
}))`
  position: absolute;
  right: ${(props) => props.theme.spacing(6)};
  bottom: ${(props) => props.theme.spacing(6)};
  transition: transform ${HOVER_DURATION} ease-out;
`;

const StyledButton = styled(Button)`
  background-color: ${(props) =>
    props.theme.color('text', 'primary', (color) => color.alpha(0.2))};
  border: 2px solid
    ${(props) =>
      props.theme.color('text', 'primary', (color) => color.alpha(0.6))};
  color: ${(props) => props.theme.palette.text.primary};
  padding: ${(props) => props.theme.spacing(1)};
  width: ${(props) => props.theme.spacing(4)};
  transition: all ${HOVER_DURATION} ease-out;
  :hover {
    background-color: ${(props) =>
      props.theme.color('text', 'primary', (color) => color.alpha(0.4))};
    /* box-shadow: 0 0 40px rgba(0, 0, 0, 0.6) !important; */
  }
  &:active {
    transition: all 75ms;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0) !important;
    transform: translateY(2px) scale(0.95);
  }
`;
const Wrapper = styled.div`
  width: ${(props) => props.theme.spacing(CARD_WIDTH)};
  color: ${(props) => props.theme.palette.text.primary};
  height: ${(props) => props.theme.spacing(10)};
  perspective: 500px;
  transform-style: preserve-3d;
  transition: transform ${HOVER_DURATION} ease-out;
  :hover ${Background} {
    transition: transform ${HOVER_DURATION} ease-out;
  }
  :hover ${BackgroundWrapper} {
    transform: scale(1.5);
    transition: transform ${HOVER_DURATION} ease-out;
  }
  :hover ${StyledButton} {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    /* transform: scale(1); */
  }
`;

export const ProjectCard = ({ doc }) => {
  const ref = useRef(null);
  const {
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    mouseX,
    mouseY,
  } = useMouseTrack({ ref });

  const debouncedMouseX = useDebounce(mouseX, 10);
  const debouncedMouseY = useDebounce(mouseY, 10);

  const title = `Open ${doc.get('name')} at Behance`;
  return (
    <Wrapper
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      x={debouncedMouseX}
      y={debouncedMouseY}
    >
      <InnerWrapper x={debouncedMouseX} y={debouncedMouseY}>
        <Content>
          {/* X{debouncedMouseX} Y{debouncedMouseY} */}
          <StyledHeader>{doc.get('name')}</StyledHeader>
          <ButtonTransformer x={debouncedMouseX} y={debouncedMouseY}>
            <StyledButton
              as="a"
              href={doc.get('url')}
              target="_blank"
              title={title}
            >
              Open&nbsp;
              <MdOpenInNew />
            </StyledButton>
          </ButtonTransformer>
        </Content>
        <BackgroundWrapper>
          <Background
            cover={doc.get('covers.808') || doc.get('covers.max_808')}
            x={debouncedMouseX}
            y={debouncedMouseY}
          />
        </BackgroundWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};
