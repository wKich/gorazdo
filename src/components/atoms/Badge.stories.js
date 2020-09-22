import React from 'react';
import { Badge } from './Badge';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {
    badgeColor: { control: 'color' },
    textColor: { control: 'color' },
  },
};

/** TODO:
 * Add more examples of badges (different colors)
 */

const Template = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {};
