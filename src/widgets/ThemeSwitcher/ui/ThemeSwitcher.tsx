import cls from "./ThemeSwitcher.module.scss";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import DarkThemeIcon from "shared/assets/icons/dark-theme-icon.png";
import LightThemeIcon from "shared/assets/icons/light-theme-icon.png";

import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
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
};
