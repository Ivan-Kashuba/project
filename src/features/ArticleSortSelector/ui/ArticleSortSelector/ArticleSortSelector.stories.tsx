import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleSortSelector } from './ArticleSortSelector';
import { Theme } from '@/shared/constants/theme';

export default {
    title: 'entities/ArticleSortSelector',
    component: ArticleSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => (
    <ArticleSortSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
