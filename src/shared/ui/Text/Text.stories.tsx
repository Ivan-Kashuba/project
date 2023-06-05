import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const LightText = Template.bind({});
LightText.args = {
    title: 'Title',
    text: 'Text description Lorem ipsum',
};

LightText.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkText = Template.bind({});
DarkText.args = {
    title: 'Title',
    text: 'Text description Lorem ipsum',
};

export const LightOnlyText = Template.bind({});
LightOnlyText.args = {
    text: 'Text description Lorem ipsum',
};

LightOnlyText.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkOnlyText = Template.bind({});
DarkOnlyText.args = {
    text: 'Text description Lorem ipsum',
};

export const LightOnlyTitle = Template.bind({});
LightOnlyTitle.args = {
    title: 'Title',
};
LightOnlyTitle.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkOnlyTitle = Template.bind({});
DarkOnlyTitle.args = {
    title: 'Title',
};

export const DarkOnlyTitleError = Template.bind({});
DarkOnlyTitleError.args = {
    title: 'Title',
    theme: TextTheme.ERROR,
};

export const LightError = Template.bind({});
LightError.args = {
    title: 'Title',
    text: 'Text description Lorem ipsum',
    theme: TextTheme.ERROR,
};

LightError.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkError = Template.bind({});
DarkError.args = {
    title: 'Title',
    text: 'Text description Lorem ipsum',
    theme: TextTheme.ERROR,
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title',
    text: 'Text description Lorem ipsum',
    theme: TextTheme.ERROR,
    size: TextSize.L,
};
