import React from 'react';
import { Tag } from './Tag';

export default {
  title: 'Atoms/Tag',
  component: Tag,
  parameters: {
    figma:
      'https://www.figma.com/file/oW95CY1Vcnb7PYICpP4By3/Gorazdo?node-id=129%3A2',
  },
  argTypes: {
    tagColor: { control: 'color' },
    textColor: { control: 'color' },
    label: {
      control: {
        type: 'select',
        options: ['Front-end', 'Javascript'],
      },
    },
  },
};

const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});
