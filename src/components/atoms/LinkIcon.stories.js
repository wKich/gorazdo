import React from 'react';
import { LinkIcon } from './LinkIcon';

export default {
  title: 'Atoms/LinkIcon',
  component: LinkIcon,
  parameters: {
    figma: '38%3A422',
  },
};

const Template = (args) => <LinkIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'subtitle',
};
