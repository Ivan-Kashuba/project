import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ListBox } from './ListBox';

const people = [
    { value: 1, content: 'Durward Reynolds', disabled: false },
    { value: 2, content: 'Kenton Towne', disabled: false },
    { value: 3, content: 'Therese Wunsch', disabled: false },
    { value: 4, content: 'Benedict Kessler', disabled: true },
    { value: 5, content: 'Katelyn Rohan', disabled: false },
];

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    defaultValue: 'Choose value',
    onChange: (value:string) => {},
    items: people,
};

Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
    defaultValue: 'Choose value',
    onChange: (value:string) => {},
    items: people,
};
