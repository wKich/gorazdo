import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withDesign } from 'storybook-addon-designs';
import { addDecorator, addParameters } from '@storybook/react';
import { StoryContext, StoryGetter, StoryWrapper } from '@storybook/addons';
import GlobalStyle from 'components/GlobalStyle';
import dark from 'styles/themes/dark';
import light from 'styles/themes/light';
import { LocaleProvider } from 'contexts/Locale';
import { makeDecorator } from '@storybook/addons';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
  },
  creevey: { captureElement: '#root', skip: [{ kinds: /Example\// }] },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      // array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
    },
  },
  locale: {
    name: 'Language',
    description: 'Global theme for components',
    defaultValue: 'ru',
    toolbar: {
      icon: 'globe',
      // array of plain string values or MenuItem shape (see below)
      items: ['ru', 'en'],
    },
  },
};

const themes = { light, dark };

const withLocaleProvider = (Story, context) => {
  return (
    <LocaleProvider mockLocale={context.globals.locale}>
      <Story {...context} />
    </LocaleProvider>
  );
};

const withThemeProvider = (Story, context) => {
  const theme = themes[context.globals.theme];
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story {...context} />
    </ThemeProvider>
  );
};

const FIGMA_PROJECT_URL =
  'https://www.figma.com/file/oW95CY1Vcnb7PYICpP4By3/Gorazdo';

const withFigma = makeDecorator({
  name: 'withFigma',
  parameterName: 'figma',
  wrapper: (Story, context, componentContext) => {
    if (!context.parameters.design && componentContext.parameters) {
      // no default design parameter and component has a "figma" parameter
      let url = FIGMA_PROJECT_URL;
      if (componentContext.parameters.startsWith('https')) {
        url = componentContext.parameters;
      } else {
        url += `?node-id=${componentContext.parameters}`;
      }
      context.parameters.design = {
        type: 'figma',
        url,
      };
    }
    return withDesign(Story, context);
  },
});

export const decorators = [withLocaleProvider, withThemeProvider, withFigma];
