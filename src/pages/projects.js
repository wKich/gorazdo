import React, {
  useMemo,
  useCallback,
  useState,
  useRef,
  useEffect,
} from 'react';
import Card from '../components/organisms/Card';
import Blurry from '../components/atoms/Blurry';
import { useProjects } from '../hooks';
import styled from 'styled-components';
import getStyle from '../utils/getStyle';
import Button from '../components/atoms/Button';

const DELAY = '1000ms';
const DOUBLED_DELAY = '2000ms';
const HOVER_DURATION = '600ms';
const RETURN_DURATION = '1000ms';

const CARD_WIDTH = 15;
const CARD_GAP = 0.5;

const byPublishedDate = (docA, docB) =>
  docB.get('published_on').seconds - docA.get('published_on').seconds;

const Content = styled.div`
  border-radius: ${getStyle('space', 3)};
  padding: ${getStyle('space', 3)};
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5)
  );
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

const Background = styled('div').attrs(props => ({
  style: {
    backgroundImage: `url(${props.cover})`,
    transform: `translateX(${-props.x}px) translateY(${-props.y}px)`,
  },
}))`
  height: 100%;
  width: 100%;
  will-change: transform;
  border-radius: ${getStyle('space', 1)};
  background-size: 140%;
  background-repeat: no-repeat;
  transition: transform ${HOVER_DURATION} ease-out;
  /* transition: transform ${RETURN_DURATION} ease-out ${DELAY}; */
`;

/*

-50 -- 50


*/

const toDegree = (value, maxDegree = 45, range = [-50, 50]) => {
  const [min, max] = range;
  const pool = Math.abs(min) + Math.abs(max);

  return (value / pool) * 45 * 2;
};

const InnerWrapper = styled.div.attrs(props => ({
  style: {
    transform: `rotateY(${props.x * 0.5}deg) rotateX(${-props.y * 0.5}deg)`,
  },
}))`
  border-radius: ${getStyle('space', 3)};
  background-color: ${getStyle('colors', 'card')};
  overflow: hidden;
  position: relative;
  height: 100%;
  /* transition: transform ${RETURN_DURATION} ease-out ${DELAY}; */
  transition: transform ${HOVER_DURATION} ease-out;
  :hover {
    transition: transform ${HOVER_DURATION} ease-out;
  }
  ::after {
    top: ${getStyle('space', 1)};
    left: ${getStyle('space', 1)};
    right: ${getStyle('space', 1)};
    bottom: ${getStyle('space', 1)};
    border-radius: ${getStyle('space', 2)};
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 0 20px rgba(0, 0, 0, 0.6);
    content: '';
    position: absolute;
  }
`;

const ButtonTransformer = styled('div').attrs(props => ({
  style: {
    transform: `translateX(${-props.x * 0.4}px) translateY(${-props.y *
      0.4}px)`,
  },
}))`
  position: absolute;
  right: ${getStyle('space', 6)};
  bottom: ${getStyle('space', 6)};
  transition: transform ${HOVER_DURATION} ease-out;
`;

const StyledButton = styled(Button)`
  background-color: ${getStyle('colors', 'font', color => color.alpha(0.2))};
  border: 2px solid ${getStyle('colors', 'font', color => color.alpha(0.6))};
  color: ${getStyle('colors', 'font')};
  padding: ${getStyle('space', 1)};
  width: ${getStyle('sizes', 4)};
  transition: all ${HOVER_DURATION} ease-out;
  :hover {
    background-color: ${getStyle('colors', 'font', color => color.alpha(0.4))};
    /* box-shadow: 0 0 40px rgba(0, 0, 0, 0.6) !important; */
  }
  &:active {
    transition: all 75ms;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0) !important;
    transform: translateY(2px) scale(0.95);
  }
`;
const StyledHeader = styled('h2')`
  padding-right: ${getStyle('sizes', 5)};
`;

const Wrapper = styled.div`
  width: ${getStyle('sizes', CARD_WIDTH)};
  height: ${getStyle('sizes', 10)};
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

const defaultMouseState = { mouseY: 0, mouseX: 0 };

const getRelated = (cursor, dimension) =>
  Math.round(((cursor - dimension / 2) / dimension) * 100);
const ProjectCard = ({ doc }) => {
  const [bound, setBound] = useState({});
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      setBound(ref.current.getBoundingClientRect());
    }
  }, [ref]);
  const [{ mouseX, mouseY }, setMouse] = useState(defaultMouseState);
  const [mouseLeaveTimer, setMouseLeaveTimer] = useState(null);
  const debouncedMouseX = useDebounce(mouseX, 10);
  const debouncedMouseY = useDebounce(mouseY, 10);

  const handleMouseEnter = useCallback(() => {
    clearTimeout(mouseLeaveTimer);
  }, [mouseLeaveTimer]);

  const handleMouseLeave = useCallback(() => {
    const timer = setTimeout(setMouse, 1000, defaultMouseState);
    setMouseLeaveTimer(timer);
  }, []);

  const handleMouseMove = useCallback(
    event => {
      const { pageX, pageY } = event;
      const { x, y, height, width } = bound;
      setMouse(state => {
        const newMouseX = getRelated(pageX - x, width);
        const newMouseY = getRelated(pageY - y, height);
        return {
          mouseX: newMouseX,
          mouseY: newMouseY,
        };
      });
    },
    [bound]
  );
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
          X{debouncedMouseX} Y{debouncedMouseY}
          <StyledHeader>{doc.get('name')}</StyledHeader>
          <ButtonTransformer x={debouncedMouseX} y={debouncedMouseY}>
            <StyledButton>Open</StyledButton>
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

const TheGrid = styled('div')`
  display: grid;
  grid-column-gap: ${getStyle('sizes', CARD_GAP)};
  overflow: hidden;
  grid-row-gap: ${getStyle('sizes', CARD_GAP)};
  grid-template-columns: repeat(
    auto-fill,
    minmax(${getStyle('sizes', CARD_WIDTH + 2 * CARD_GAP)}, 1fr)
  );
`;

const TheItem = styled('div')`
  place-self: center;
`;
const Projects = props => {
  const [projectsSnapshot, loading, error] = useProjects();
  console.log(projectsSnapshot, loading, error);
  if (loading) {
    return 'loading...';
  }
  if (error) {
    return 'error';
  }
  return (
    <TheGrid>
      {projectsSnapshot.docs.sort(byPublishedDate).map(doc => (
        <TheItem key={doc.id}>
          <Blurry>
            <ProjectCard doc={doc} />
          </Blurry>
        </TheItem>
      ))}
    </TheGrid>
  );
};

export { Projects };

function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );

  return debouncedValue;
}
