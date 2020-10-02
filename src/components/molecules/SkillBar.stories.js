import React from 'react';
import { SkillBar } from './SkillBar';


export default {
  title: 'Molecules/SkillBar',
  componen: SkillBar,
  parameters: {
    figma:
      'https://www.figma.com/file/oW95CY1Vcnb7PYICpP4By3/Gorazdo?node-id=185%3A0',
  },
};

const Template = (args) => <SkillBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Top Skills'
  
};
