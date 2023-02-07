import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import ArrowLeft from 'shared/assets/icons/arrow-left.svg';
import ArrowRight from 'shared/assets/icons/arrow-right.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >

            <Button
                data-testid="sidebar-toggle"
                className={cls.toggleBtn}
                theme={ThemeButton.CLEAR}
                onClick={onToggle}
            >
                {collapsed
                    ? <ArrowRight className={cls.toggleArrow} />
                    : <ArrowLeft className={cls.toggleArrow} />}
            </Button>
            <div className={cls.items}>

                <AppLink to={RoutePath.main} className={cls.item}>
                    <HomeIcon className={cls.icon} />
                    <span className={cls.link}>{t('main')}</span>
                </AppLink>

                <AppLink to={RoutePath.about} className={cls.item}>
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t('about')}</span>
                </AppLink>

            </div>
            <div className={cls.switchers}>
                <LangSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    );
};
