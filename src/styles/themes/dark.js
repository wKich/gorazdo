import protoTheme from './proto';

const variants = {
  colors: {},
  cards: {
    // promo cards
    unit1: {
      color: 'white',
      bg: 'black',
    },
    unit2: {
      color: 'yellow',
      backgroundColor: 'black',
    },
    unit3: {
      color: 'green',
      backgroundColor: 'black',
    },
    unit4: {
      color: 'blue',
      backgroundColor: 'black',
    },
  },
  buttons: {
    primary: {},
    secondary: {},
    accent: {},
  },
};

const dark = {
  ...protoTheme,
  ...variants,
};

export default dark;
