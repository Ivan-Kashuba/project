var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkThemeIcon from 'shared/assets/icons/dark-theme-icon.png';
import LightThemeIcon from 'shared/assets/icons/light-theme-icon.png';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';
export var ThemeSwitcher = function (_a) {
    var className = _a.className;
    var _b = useTheme(), theme = _b.theme, toggleTheme = _b.toggleTheme;
    return (_jsx(Button, __assign({ theme: ThemeButton.CLEAR }, { children: _jsx("img", { src: theme === Theme.DARK ? LightThemeIcon : DarkThemeIcon, className: classNames(cls.themeSwitcher, {}, [className]), onClick: toggleTheme, alt: "#" }) })));
};
