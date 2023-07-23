import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from '../ProfileCard/ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    data: {
        username: 'User',
        age: 22,
        country: Country.Ukraine,
        lastname: 'Surname',
        firstname: 'FirstName',
        currency: Currency.UAH,
        city: 'Lviv',
        avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};

export const Loading = Template.bind({});

Loading.args = {
    isLoading: true,
};
