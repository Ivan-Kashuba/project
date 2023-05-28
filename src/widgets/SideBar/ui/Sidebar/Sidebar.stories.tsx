import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const LightAuthorized = Template.bind({});
LightAuthorized.args = {};
LightAuthorized.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    user: { authData: { id: '123', username: 'User' } },
})];

export const DarkAuthorized = Template.bind({});
DarkAuthorized.args = {};
DarkAuthorized.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: { authData: { id: '123', username: 'User' } },
})];

export const LightNotAuth = Template.bind({});
LightNotAuth.args = {};
LightNotAuth.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    user: {},
})];

export const DarkNotAuth = Template.bind({});
DarkNotAuth.args = {};
DarkNotAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {},
})];
