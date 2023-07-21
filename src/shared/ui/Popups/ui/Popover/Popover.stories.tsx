import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ThemeButton } from '../../../Button/Button';
import { Popover } from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const DarkBottomRight = Template.bind({});
DarkBottomRight.args = {
    trigger: <Button theme={ThemeButton.CLEAR}>Trigger</Button>,
    direction: 'bottom right',
    children: (
        <div style={{ padding: 30 }}>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
        </div>),
};
