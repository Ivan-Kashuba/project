import React, { memo } from 'react';

import DarkThemeIcon from '@/shared/assets/icons/dark-theme-icon.png';
import LightThemeIcon from '@/shared/assets/icons/light-theme-icon.png';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';
import { Theme } from '@/shared/constants/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button theme={ThemeButton.CLEAR}>
            <img
                src={theme === Theme.DARK ? LightThemeIcon : DarkThemeIcon}
                className={classNames(cls.themeSwitcher, {}, [className])}
                onClick={toggleTheme}
                alt="#"
            />
        </Button>
    );
});
