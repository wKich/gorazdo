const gridStep = 8;

const range = (start = 0, end, step = 1) => {
  return new Array(end).fill(null).map((item, index) => {
    return start + index + step;
  });
};

const theme = {
  breakpoints: ['544px', '768px', '1012px', '1280px'],
  maxWidths: {
    small: '544px',
    medium: '768px',
    large: '1012px',
    xlarge: '1280px',
  },
  fonts: {
    normal: fontStack([
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
    ]),
    mono: fontStack([
      'SFMono-Regular',
      'Consolas',
      'Liberation Mono',
      'Menlo',
      'Courier',
      'monospace',
    ]),
  },
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 600,
  },
  borders: {
    0: 0,
    1: '1px solid',
    dropbox: '3px dashed',
  },
  shadows: {
    small: '0 1px 1px rgba(27, 31, 35, 0.1)',
    medium: '0 1px 5px rgba(27, 31, 35, 0.15)',
    large: '0 1px 15px rgba(27, 31, 35, 0.15)',
    'extra-large': '0 10px 50px rgba(27, 31, 35, 0.07)',
    formControl: 'rgba(27, 31, 35, 0.075) 0px 1px 2px inset',
    formControlFocus: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 0.2em',
  },
  radii: [0, 4, 8, 16, 32, 48],
  space: [0, 8, 16, 24, 36, 42, 48, 60, 72, 96],
  unit: 8,
  sizes: [0, 0.5, 1, 1.5].concat(range(2, 20)).reduce((acc, item) => {
    acc[item] = item * gridStep;
    return acc;
  }, {}),
  fontSizes: {
    small: 10,
    normal: 12,
    medium: 14,
    large: 16,
    subtitle: 12,

    h100: 12,
    h200: 14,
    h300: 16,
    h400: 20,
    h500: 24,
    h600: 32,
    h700: 40,
    h800: 56,
    h900: 72,
  },
  lineHeights: {
    small: 12,
    subtitle: 16,
    normal: 16,
    medium: 20,
    large: 24,

    h100: 16,
    h200: 20,
    h300: 24,
    h400: 32,
    h500: 40,
    h600: 48,
    h700: 64,
    h800: 88,
    h900: 108,
  },
};

export default theme;

function fontStack(fonts) {
  return fonts
    .map((font) => (font.includes(' ') ? `"${font}"` : font))
    .join(', ');
}
