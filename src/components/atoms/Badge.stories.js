import React from 'react';
import { Badge } from './Badge';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {
    badgeColor: { control: 'color' },
    textColor: { control: 'color' },
    label: {
      control:{
        type: 'select',
        options: ['JavaScript', 'NodeJS', 'React']
      }
    }
  },
};

/** TODO:
 * Add more examples of badges (different colors)
 */

const Template = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
label: 'Progressive Web Apps (PWA)',
badgeColor: '#F2F5F8',
textColor: '#8794A1',
};

export const Red = Template.bind({});
Red.args = {
};

export const Blue = Template.bind({});
Blue.args = {
label: 'React',
  badgeColor: '#D8E5FB',
textColor: '#3C7EEC',
};

export const Green  = Template.bind({});
Green.args = {
label: 'NodeJS',
  badgeColor: '#D6FEC3',
textColor: '#5AC377',
};