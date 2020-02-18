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

const Background = styled('div').attrs(props => ({
  style: {
    backgroundImage: `url(${props.cover})`,
    transform: `translateX(${-props.x}px) translateY(${-props.y}px)`,
  },
}))`
  position: absolute;
  left: 0%;
  top: 0;
  right: 0;
  bottom: 0;
  will-change: transform;
  border-radius: ${getStyle('space', 1)};
  /* transform-origin: 20% center; */
  /* transform: scale(1.2); */
  background-size: 100%;
  background-repeat: no-repeat;
  transition: 2s 1s transform ease-out;
`;

const InnerWrapper = styled.div.attrs(props => ({
  style: {
    transform: `rotateY(${props.x / 2}deg) rotateX(${-props.y / 2}deg)`,
  },
}))`
  border-radius: ${getStyle('space', 3)};
  background-color: ${getStyle('colors', 'card')};
  overflow: hidden;
  position: relative;
  height: 100%;
  transition: 2s 1s transform ease-out;
  :hover {
    transition: 300ms transform ease-out;
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
  :hover ${Background} {
    transition: 300ms transform ease-out;
  }
`;

const Wrapper = styled.div`
  width: ${getStyle('sizes', 15)};
  height: ${getStyle('sizes', 10)};
  perspective: 500px;
  transform-style: preserve-3d;
  :hover ${Background} {
    /* transform: scale(1.2) rotate3d(0, 1, 0, 7deg) translateX(-6px); */
  }
`;

const defaultMouseState = { mouseY: 0, mouseX: 0 };

const getRelated = (cursor, dimension) =>
  Math.round(((cursor - dimension / 2) / dimension) * 100);
const ProjectCard = ({ doc }) => {
  const [bound, setBound] = useState({});
  const ref = useRef(null);
  const { current } = ref;
  useEffect(() => {
    console.log(ref);
    if (ref.current) {
      setBound(ref.current.getBoundingClientRect());
    }
  }, [ref]);
  console.log(bound);
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
          <h2>{doc.get('name')}</h2>
        </Content>
        <Background
          cover={doc.get('covers.808') || doc.get('covers.max_808')}
          x={debouncedMouseX}
          y={debouncedMouseY}
        />
      </InnerWrapper>
    </Wrapper>
  );
};

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
    <div>
      {projectsSnapshot.docs.sort(byPublishedDate).map(doc => (
        <Blurry key={doc.id}>
          <ProjectCard doc={doc} />
        </Blurry>
      ))}
    </div>
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
