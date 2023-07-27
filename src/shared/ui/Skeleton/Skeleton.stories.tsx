import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Skeleton } from './Skeleton';
import { Theme } from '@/shared/constants/theme';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const NormalLight = Template.bind({});
NormalLight.args = {
    width: '100%',
    height: 200,

};
NormalLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const CircleLight = Template.bind({});
CircleLight.args = {
    border: '50%',
    width: 100,
    height: 100,
};
CircleLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const NormalDark = Template.bind({});
NormalDark.args = {
    width: '100%',
    height: 200,

};

export const CircleDark = Template.bind({});
CircleDark.args = {
    border: '50%',
    width: 100,
    height: 100,
};
