import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleInputsByType } from './ArticleInputsByType';
import { Theme } from '@/shared/constants/theme';

export default {
    title: 'shared/ArticleInputsByType',
    component: ArticleInputsByType,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleInputsByType>;

const Template: ComponentStory<typeof ArticleInputsByType> = (args) => (
    <ArticleInputsByType {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
