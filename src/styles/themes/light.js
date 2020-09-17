import protoTheme from './proto';

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
    primary: {
      background: '#000',
      color: '#fff',
    },
    secondary: {
      background: '#333',
      color: '#ddd',
    },
    accent: {
      background: '#2C5DE5',
      color: '#fff',
    },
  },
};

const light = {
  name: 'light',
  // backgroundColor: '#fff', // storybook needs it
  ...protoTheme,
  ...variants,
};

export default light;
