import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text } from 'shared/ui/Text/Text';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const authData = useSelector(getUserAuthData);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <div>
                    <AppLink to="/">
                        <Text className={cls.appName} title={t('FTD APP')} />
                    </AppLink>
                    <AppLink to={RoutePath.article_create}>
                        {t('Create article')}
                    </AppLink>
                </div>

                <Dropdown
                    items={[
                        { content: t('Logout'), onClick: onLogout },
                        { content: t('Profile'), href: RoutePath.profile + authData.id },
                    ]}
                    className={cls.dropdown}
                    trigger={(
                        <Avatar
                            size={30}
                            src={authData.avatar}
                        />
                    )}
                    direction="bottom left"
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.OUTLINE}
                className={cls.loginButton}
                onClick={onShowModal}
            >
                {t('Login')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </div>
    );
});
