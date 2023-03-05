import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { StoreDecorator } from '../../../../shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Light = Template.bind({});
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    login: { username: 'admin', password: '123' },
})];

export const Dark = Template.bind({});
Dark.decorators = [StoreDecorator({
    login: { username: 'admin', password: '123' },
})];

export const DarkWithError = Template.bind({});
DarkWithError.decorators = [StoreDecorator({
    login: { username: 'admin', password: '123', error: 'Login or password is incorrect' },
})];

export const LightWithError = Template.bind({});
LightWithError.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    login: { username: 'admin', password: '123', error: 'Login or password is incorrect' },
})];

export const LightWithLoading = Template.bind({});
LightWithLoading.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    login: { username: 'admin', password: '123', isLoading: true },
})];

export const DarkWithLoading = Template.bind({});
DarkWithLoading.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    login: { username: 'admin', password: '123', isLoading: true },
})];
