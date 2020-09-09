import getStyle from '../utils/getStyle';
import { protoTheme } from './themes/proto';

type PostProcessor = (any: any) => string;
const fontWeights = ['regular', 'semibold', 'bold'] as const;
type FontWeights = typeof fontWeights[number];
const typographyVariants = [
  'small',
  'normal',
  'medium',
  'large',
  'subtitle',
  'h100',
  'h200',
  'h300',
  'h400',
  'h500',
  'h600',
  'h700',
  'h800',
  'h900',
] as const;
type Typography = typeof typographyVariants[number];
export const makeStyle = {
  sizes: (value: number) => (props: object) => {
    return getStyle('sizes', value)(props);
  },
  fontWeights: (value: FontWeights) => (props: object) => {
    return getStyle('fontWeights', value)(props);
  },
  fontSizes: (value: Typography) => (props: object) => {
    return getStyle('fontSizes', value)(props);
  },
  lineHeights: (value: Typography) => (props: object) => {
    return getStyle('lineHeights', value)(props);
  },

  breakpoints: (value: any) => (props: object) =>
    getStyle(value, 'breakpoints')(props),
  maxWidths: (value: any) => (props: object) =>
    getStyle(value, 'maxWidths')(props),
  fonts: (value: any) => (props: object) => getStyle('fonts', value)(props),

  borders: (value: any) => (props: object) => getStyle('borders', value)(props),
  shadows: (value: any) => (props: object) => getStyle('shadows', value)(props),
  radii: (value: number) => (props: object) => getStyle('radii', value)(props),
  space: (value: number) => (props: object) => getStyle('space', value)(props),
};
