import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SideBarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?:boolean;
}

export const SidebarItemsList: SideBarItemType[] = [
    {
        path: RoutePath.main,
        Icon: HomeIcon,
        text: 'main',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'about',
    }, {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'profile',
        authOnly: true,
    },
];
