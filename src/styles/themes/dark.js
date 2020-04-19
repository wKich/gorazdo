import protoTheme from './proto';

const variants = {
  colors: {
    paper: '#333',
    scrollbarThumb: '#111',
    card: 'black',
    font: 'white',
    primary: {
      primary: '#2626a9',
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
