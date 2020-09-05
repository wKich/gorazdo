import React from 'react';
import { UserTop } from './UserTop';

class DockMock {
  constructor(payload) {
    this.payload = payload;
  }

  get(path) {
    return path.split('.').reduce((result, path) => {
      return result[path];
    }, this.payload);
  }

  data() {
    return this.payload;
  }
}

export default {
  title: 'Molecules/UserTop',
  componen: UserTop,
  parameters: {
    figma:
      'https://www.figma.com/file/oW95CY1Vcnb7PYICpP4By3/Gorazdo?node-id=185%3A0',
  },
};

const Template = (args) => <UserTop {...args} />;

export const Default = Template.bind({});
Default.args = {
  doc: new DockMock({
    firstName: { en: 'Pavel', ru: 'Павел' },
    founder: true,
    lastName: {
      en: 'Shchegolev',
      ru: 'Щеголев',
    },
    name: 'Pavel',
    profession: { en: 'Lead Developer', ru: 'Ведущий разработчик' },
  }),
};
