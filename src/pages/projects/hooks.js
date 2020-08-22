import { useState, useEffect, useCallback } from 'react';

export const useDebounce = (value, delay) => {
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
};

const getRelated = (cursor, dimension) =>
  Math.round(((cursor - dimension / 2) / dimension) * 100);

export const useMouseTrack = ({ ref, defaultX = 0, defaultY = 0 }) => {
  const [{ mouseX, mouseY }, setMouse] = useState({
    mouseX: defaultX,
    mouseY: defaultY,
  });
  const [mouseLeaveTimer, setMouseLeaveTimer] = useState(null);
  const [bound, setBound] = useState({});
  useEffect(() => {
    if (ref.current) {
      setBound(ref.current.getBoundingClientRect());
    }
  }, [ref]);

  const handleMouseMove = useCallback(
    event => {
      const { clientX, clientY } = event;
      const { x, y, height, width } = bound;
      setMouse(state => {
        const newMouseX = getRelated(clientX - x, width);
        const newMouseY = getRelated(clientY - y, height);
        return {
          mouseX: newMouseX,
          mouseY: newMouseY,
        };
      });
    },
    [bound]
  );

  const handleMouseEnter = useCallback(() => {
    setBound(ref.current.getBoundingClientRect());
    clearTimeout(mouseLeaveTimer);
  }, [mouseLeaveTimer, ref]);

  const handleMouseLeave = useCallback(() => {
    const timer = setTimeout(setMouse, 1000, {
      mouseX: defaultX,
      mouseY: defaultY,
    });
    setMouseLeaveTimer(timer);
  }, [defaultX, defaultY]);

  return {
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    mouseX,
    mouseY,
  };
};
