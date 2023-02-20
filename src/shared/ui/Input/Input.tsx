import { classNames } from 'shared/lib/classNames/classNames';
import { InputHTMLAttributes, memo, useState } from 'react';
import ErrorIcon from 'shared/assets/icons/errorIcon.svg';
import OpenEyeIcon from 'shared/assets/icons/openEyeIcon.svg';
import CloseEyeIcon from 'shared/assets/icons/closeEyeIcon.svg';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'|'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value :string)=>void;
    isPassword?:boolean
    isError?:boolean,
    errorText?:string,
    label:string;

}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        isError,
        isPassword,
        errorText,
        label,
        placeholder,
        name,
        ...otherProps
    } = props;

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const [showPassword, setShowPassword] = useState(false);

    const showPasswordToggle = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            <div className={cls.label}>
                {label}
            </div>

            <input
                type={!isPassword ? type : `${showPassword ? 'text' : 'password'}`}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChangeHandler}
                className={isError ? cls.inputStyleError : cls.inputStyle}
                {...otherProps}
            />

            {isError && (
                <div className={isPassword ? cls.errorPassword : cls.error}>
                    <ErrorIcon />
                </div>
            )}
            {isPassword && (
                <div
                    className={cls.passwordIcon}
                    onClick={showPasswordToggle}
                >
                    {showPassword ? <CloseEyeIcon /> : <OpenEyeIcon />}
                </div>
            )}
            {isError && errorText
                && (
                    <div className={cls.errorText}>
                        {errorText}
                    </div>
                )}
        </div>
    );
});
