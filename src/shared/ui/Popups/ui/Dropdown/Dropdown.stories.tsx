import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button } from '../../../Button/Button';
import { Dropdown } from './Dropdown';
import { Theme } from '@/shared/constants/theme';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>Open</Button>,
    items: [
        { content: 'first' },
        { content: 'seconds' },
        { content: 'third' },
        { content: 'forth' },
    ],
};

Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
    trigger: <Button>Open</Button>,
    items: [
        { content: 'first' },
        { content: 'seconds' },
        { content: 'third' },
        { content: 'forth' },
    ],
};
