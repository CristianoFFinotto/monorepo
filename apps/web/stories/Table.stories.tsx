import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Table from '../components/Table/Table';

//👇 This default export determines where your story goes in the story list
export default {

  title: 'Components/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Tab = Template.bind({});

Tab.args = {
    config: {
        columns: ['ciao', 'ceome', 'vvaaaa'],
        data: [[1,2,3,4,5],[6,7,8],[10,11,12,13]]
    }

};