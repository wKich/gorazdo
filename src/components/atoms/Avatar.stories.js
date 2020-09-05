import React from 'react';
import { Avatar } from './Avatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    figma:
      'https://www.figma.com/file/oW95CY1Vcnb7PYICpP4By3/Gorazdo?node-id=180%3A0',
  },
  argTypes: {
    size: {
      control: {
        type: 'range',
        min: 6,
        max: 20,
        step: 2,
      },
    },
  },
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 10,
};
