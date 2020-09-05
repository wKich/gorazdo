import protoTheme from './proto';

const variants = {
  colors: {
    paper: '#09090a',
    pane: '#1a1b1e',
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
  name: 'dark',
  ...protoTheme,
  ...variants,
};

export default dark;
