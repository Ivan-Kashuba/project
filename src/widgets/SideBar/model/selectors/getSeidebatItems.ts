import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import HomeIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticlesIcon from '@/shared/assets/icons/newspaperIcon.svg';
import { SideBarItemType } from '../types/sidebar';
import { RoutePath } from '@/shared/constants/router';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SideBarItemType[] = [
        {
            path: RoutePath.main,
            Icon: HomeIcon,
            text: 'main',
        },
        {
            path: RoutePath.about,
            Icon: AboutIcon,
            text: 'about',
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: RoutePath.profile + userData.id,
                Icon: ProfileIcon,
                text: 'profile',
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                Icon: ArticlesIcon,
                text: 'articles',
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
