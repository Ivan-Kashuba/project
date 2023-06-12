import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { SideBarItemType } from 'widgets/SideBar/model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SideBarItemType,
    collapsed: boolean
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (!isAuth && item.authOnly) {
        return null;
    }

    return (

        <AppLink to={item?.path} className={classNames(cls.item, { [cls.collapsed]: collapsed })}>
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item?.text)}</span>
        </AppLink>

    );
};
