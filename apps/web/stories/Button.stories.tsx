import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button/Button';

//👇 This default export determines where your story goes in the story list
export default {

  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'primary',
  type: 'button'
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: 'secondary',
  type: 'submit'
};