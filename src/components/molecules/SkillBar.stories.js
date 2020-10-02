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
  label: 'Top Skills',
};

export const TestExample = Template.bind({});
TestExample.args = {
  label: 'Test example',
  topBadges: [
    {
      label: 'React',
      badgeColor: '#D8E5FB',
      textColor: '#002233',
    },
    {
      label: 'NodeJs',
      badgeColor: '#D6FEC3',
      textColor: '#5AC377',
    },
  ],
};
