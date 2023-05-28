import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfilePage from 'pages/ProfilePage/ui/ProfilePage';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    profile: {
        form: {
            username: 'User',
            age: 22,
            country: Country.Ukraine,
            lastname: 'Surname',
            firstname: 'FirstName',
            currency: Currency.UAH,
            city: 'Lviv',
            avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'User',
            age: 22,
            country: Country.Ukraine,
            lastname: 'Surname',
            firstname: 'FirstName',
            currency: Currency.UAH,
            city: 'Lviv',
            avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
        },
    },
})];
