import { color } from '../color';
import { createMuiTheme } from '@material-ui/core';

const dark = createMuiTheme({
  name: 'dark',
  type: 'dark',
  palette: {
    misc: {
      scrollbarThumb: '#111',
    },
    background: {
      paper: '#f4f4f4',
      default: 'white',
    },
    primary: {
      main: '#2626a9',
    },
  },
  color,
});

export default dark;
