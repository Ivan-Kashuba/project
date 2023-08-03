import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import DefaultAvatar from '@/shared/assets/icons/defaultAvatar.png';
import { CommentList } from './CommentList';
import { Theme } from '@/shared/constants/theme';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'Hello World',
            user: { id: '1', avatar: DefaultAvatar, username: 'User' },
        },
        {
            id: '1',
            text: 'Comment2',
            user: { id: '1', avatar: DefaultAvatar, username: 'User' },
        },
    ],
};

Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
