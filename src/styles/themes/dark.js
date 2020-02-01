import protoTheme from './proto';

const variants = {
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
