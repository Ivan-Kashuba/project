import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Select } from './Select';
import { Theme } from '@/shared/constants/theme';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Light = Template.bind({});
Light.args = {
    label: 'Label Text',
    options: [
        { value: 'Value1', content: 'Content1' },
        { value: 'Value2', content: 'Content2' },
        { value: 'Value3', content: 'Content3' },
        { value: 'Value4', content: 'Content4' },
    ],
};

Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
    label: 'Label Text',
    options: [
        { value: 'Value1', content: 'Content1' },
        { value: 'Value2', content: 'Content2' },
        { value: 'Value3', content: 'Content3' },
        { value: 'Value4', content: 'Content4' },
    ],
};
