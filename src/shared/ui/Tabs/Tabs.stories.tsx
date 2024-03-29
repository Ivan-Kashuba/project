import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Tabs } from './Tabs';
import { Theme } from '@/shared/constants/theme';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    tabs: [
        {
            value: 'tab 1',
            content: 'tab1',
        },
        {
            value: 'tab 2',
            content: 'tab2',
        },
        {
            value: 'tab 3',
            content: 'tab3',
        },
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick'),
};

Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
    tabs: [
        {
            value: 'tab 1',
            content: 'tab1',
        },
        {
            value: 'tab 2',
            content: 'tab2',
        },
        {
            value: 'tab 3',
            content: 'tab3',
        },
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick'),
};
