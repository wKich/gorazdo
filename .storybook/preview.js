import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withDesign } from 'storybook-addon-designs';
import { StoryContext, StoryGetter, StoryWrapper } from '@storybook/addons';
import GlobalStyle from 'components/GlobalStyle';
import dark from 'styles/themes/dark';
import light from 'styles/themes/light';
import { makeDecorator } from '@storybook/addons';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
  },
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
};

const themes = { light, dark };

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
    console.log(
      componentContext.parameters,
      context.parameters.design,
      context.parameters.figma
    );
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

export const decorators = [withThemeProvider, withFigma];
