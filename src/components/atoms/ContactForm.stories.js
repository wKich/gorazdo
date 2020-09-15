import React from 'react';
import { ContactForm } from './ContactForm';

export default {
  title: 'Atoms/ContactForm',
  component: ContactForm,
  parameters: {
    figma:
      'https://www.figma.com/file/4yowKqhhdz03IfLoaah94i/HomeTask_2-2020.08.28?node-id=38%3A422',
  },
  argTypes: {
    buttonColor: { control: 'color' },
    buttonTextColor: { control: 'color' },
  },
};

const Template = (args) => <ContactForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
