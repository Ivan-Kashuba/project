import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ListBox } from './ListBox';

const people = [
    { value: 1, content: 'Durward Reynolds', disabled: false },
    { value: 2, content: 'Kenton Towne', disabled: false },
];

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    defaultValue: 'Choose',
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

export const TopLeft = Template.bind({});
TopLeft.args = {
    defaultValue: 'Choose value',
    onChange: (value:string) => {},
    items: people,
    direction: 'top left',
};

export const TopRight = Template.bind({});
TopRight.args = {
    defaultValue: 'Choose value',
    onChange: (value:string) => {},
    items: people,
    direction: 'top right',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    defaultValue: 'Choose value',
    onChange: (value:string) => {},
    items: people,
    direction: 'bottom left',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    defaultValue: 'Choose value',
    onChange: (value:string) => {},
    items: people,
    direction: 'bottom right',
};
