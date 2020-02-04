import React, { useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const roll = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0,-55%,0);
    visibility: visible;
  }
  1% {
    opacity: 1;
	  transform: translate3d(0,0%,0);
  }
  20% {
    opacity: 1;
    transform: translate3d(0,0%,0);
    visibility: visible;
  }
  21% {
    opacity: 0;
    transform: translate3d(0,55%,0);
    visibility: hidden;
  }
  100% {
    opacity: 0;
    visibility: visible;
  }
`;

const words = [
  'Eetcafé☕',
  'Cafe🍽️',
  'Barbershop💈',
  'Kapsalon💇',
  'Startup🚀',
];
const delay = 2;

const Word = styled.span`
  position: absolute;
  opacity: 0;
  left: 0;
  white-space: nowrap;
  bottom: 0;
  overflow: hidden;
  animation: ${props =>
    css`
      ${roll} ${props.length * delay}s linear infinite 0s
    `};
`;

const WordContainer = styled.span`
  position: relative;
`;

const Roller = props => {
  return (
    <WordContainer>
      {words.map((word, index, arr) => (
        <Word
          key={word}
          length={arr.length}
          style={{ animationDelay: `${index * delay}s` }}
        >
          {word}
        </Word>
      ))}
    </WordContainer>
  );
};

const Center = styled.div`
  text-align: center;
`;

const Hello = styled.h2`
  justify-content: center;
  font-size: 2.5em;
  margin-left: -3.5em;
  line-height: 3em;
  display: flex;
`;
const WelcomeTitle = props => {
  return (
    <Center>
      <Hello>
        We design things for your&nbsp;
        <Roller />
      </Hello>
      <h2>Wow. What's there?</h2>
      <h2>Special limited offers</h2>
    </Center>
  );
};

export default WelcomeTitle;
