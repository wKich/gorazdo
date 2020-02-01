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
  fontSizes: ['12px', '14px', '16px', '20px', '24px', '32px', '40px', '48px'],
  radius: ['0', '3px', '6px'],
  shadows: {
    small: '0 1px 1px rgba(27, 31, 35, 0.1)',
    medium: '0 1px 5px rgba(27, 31, 35, 0.15)',
    large: '0 1px 15px rgba(27, 31, 35, 0.15)',
    'extra-large': '0 10px 50px rgba(27, 31, 35, 0.07)',
    formControl: 'rgba(27, 31, 35, 0.075) 0px 1px 2px inset',
    formControlFocus: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 0.2em',
  },
  radii: [0, 3, 6, 12, 18],
  space: [0, 6, 12, 18, 24, 36, 42, 48, 60, 72, 96],
  sizes: {
    0: 0,
    0.5: 12, //  24 * 0.5,
    1: 24, //  24 * 1,
    1.5: 36, //  24 * 1.5,
    2: 48, //  24 * 2,
    3: 72, //  24 * 3,
    4: 96, //  24 * 4,
    5: 120, // 24 * 5,
    8: 192, // 24 * 8,
    10: 240, // 24 * 10,
    15: 360, // 24 * 15,
  },
};

export default theme;

function fontStack(fonts) {
  return fonts
    .map(font => (font.includes(' ') ? `"${font}"` : font))
    .join(', ');
}
