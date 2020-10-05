import React from 'react';
import { PanelArticles } from './PanelArticles';

export default {
  title: 'Molecules/PanelArticles',
  component: PanelArticles,
  parameters: {
    figma:
      'https://www.figma.com/file/oW95CY1Vcnb7PYICpP4By3/Gorazdo?node-id=129%3A2',
  },
};

const Template = (args) => <PanelArticles {...args} />;

export const Default = Template.bind({});
