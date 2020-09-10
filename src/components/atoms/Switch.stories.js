import React, { useState } from 'react';
import { Switch } from './Switch';

export default {
  title: 'Atoms/Switch',
  component: Switch,
  parameters: {
    figma:
      'https://www.figma.com/file/oW95CY1Vcnb7PYICpP4By3/Gorazdo?node-id=180%3A0',
  },
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <Switch {...args} />;

export const WhenDefaultProps = Template.bind({});
WhenDefaultProps.args = {};

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: '#84367F',
};

const TemplateClickable = (args) => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state);
  };
  return <Switch {...args} isOn={state} onClick={handleClick} />;
};

export const DemoClick = TemplateClickable.bind({});
DemoClick.args = {
  color: '#84367F',
};
