import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthDark = Template.bind({});
AuthDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })];

export const AuthLight = Template.bind({});
AuthLight.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })];
