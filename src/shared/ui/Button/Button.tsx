import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    CONFIRM = 'confirm',
    OUTLINE_RED = 'outline_red'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ThemeButton,
    disabled?: boolean,
    children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        className, children, theme = ThemeButton.OUTLINE, disabled, ...otherProps
    } = props;

    const mods: Mods = {
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
