import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/selectLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUserName = useCallback((value:string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangeUserPassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Login Form')} />
            {error && <Text text={t(error)} theme={TextTheme.ERROR} />}
            <Input
                label={t('Username')}
                placeholder={t('Username')}
                onChange={onChangeUserName}
                value={username}
            />

            <Input
                label={t('Password')}
                placeholder={t('Password')}
                onChange={onChangeUserPassword}
                isPassword
                value={password}
            />

            <Button
                onClick={onLoginClick}
                theme={ThemeButton.CONFIRM}
                className={cls.loginBtn}
                disabled={isLoading}
            >
                {t('Login')}
            </Button>
        </div>
    );
});
