import protoTheme from './proto';

const variants = {
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
  colors: {
    paper: '#333',
    card: 'black',
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
