import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import React, { useState } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const [text, setText] = useState('');

    const onChange = (val:string) => {
        setText(val);
    };

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>

            <Input
                value={text}
                label={t('Username')}
                placeholder={t('Username')}
                onChange={onChange}
            />

            <Input
                value={text}
                label={t('Password')}
                placeholder={t('Password')}
                onChange={onChange}
                isPassword

            />

            <Button theme={ThemeButton.CONFIRM} className={cls.loginBtn}>{t('Login')}</Button>
        </div>
    );
};
