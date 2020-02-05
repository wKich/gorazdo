import protoTheme from './proto';

const variants = {
  colors: {
    paper: '#333',
    card: 'black',
    font: 'white',
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
