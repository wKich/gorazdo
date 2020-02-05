import protoTheme from './proto';

const variants = {
  colors: {
    paper: '#f4f4f4',
    card: 'white',
    font: 'black',
  },
  buttons: {
    primary: {},
    secondary: {},
    accent: {},
  },
};

const white = {
  ...protoTheme,
  ...variants,
};

export default white;
