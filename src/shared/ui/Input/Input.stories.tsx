import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from 'shared/ui/Input/Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const LightInput = Template.bind({});
LightInput.args = {
    label: 'Label',
    value: 'Text',
    style: {
        width: '400px',
    },
};

LightInput.decorators = [ThemeDecorator(Theme.LIGHT)];

export const LightInputWithPlaceholder = Template.bind({});
LightInputWithPlaceholder.args = {
    label: 'Label',
    placeholder: 'Placeholder',
    style: {
        width: '400px',
    },
};

LightInputWithPlaceholder.decorators = [ThemeDecorator(Theme.LIGHT)];

export const LightInputWithErrors = Template.bind({});

LightInputWithErrors.args = {
    label: 'Label',
    isError: true,
    errorMessage: 'Some Error',

};

LightInputWithErrors.decorators = [ThemeDecorator(Theme.LIGHT)];

export const LightPasswordInput = Template.bind({});
LightPasswordInput.args = {
    label: 'Label',
    isPassword: true,

};

LightPasswordInput.decorators = [ThemeDecorator(Theme.LIGHT)];

export const LightPasswordInputWithErrors = Template.bind({});
LightPasswordInputWithErrors.args = {
    label: 'Label',
    isPassword: true,
    isError: true,
    errorMessage: 'Some Error',
};

LightPasswordInputWithErrors.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkInput = Template.bind({});
DarkInput.args = {
    label: 'Label',
    value: 'Text',
    style: {
        width: '400px',
    },
};

export const DarkInputWithPlaceholder = Template.bind({});
DarkInputWithPlaceholder.args = {
    label: 'Label',
    placeholder: 'Placeholder',
    style: {
        width: '400px',
    },
};

export const DarkInputWithErrors = Template.bind({});

DarkInputWithErrors.args = {
    label: 'Label',
    isError: true,
    errorMessage: 'Some Error',

};

export const DarkPasswordInput = Template.bind({});
DarkPasswordInput.args = {
    label: 'Label',
    isPassword: true,

};

export const DarkPasswordInputWithErrors = Template.bind({});
DarkPasswordInputWithErrors.args = {
    label: 'Label',
    isPassword: true,
    isError: true,
    errorMessage: 'Some Error',
};
