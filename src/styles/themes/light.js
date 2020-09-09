import { protoTheme } from './proto';

const variants = {
  colors: {
    paper: '#f4f4f4',
    card: 'white',
    scrollbarThumb: '#999',
    font: 'black',
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

const light = {
  name: 'light',
  // backgroundColor: '#fff', // storybook needs it
  ...protoTheme,
  ...variants,
};

export default light;
