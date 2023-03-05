import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    CONFIRM = 'confirm',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme: ThemeButton,
    disabled?: boolean,
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, children, theme, disabled, ...otherProps
    } = props;

    const mods:Record<string, boolean> = {
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            {...otherProps}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
