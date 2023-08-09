import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { Text } from '@/shared/ui/Text/Text';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cls from './Navbar.module.scss';
import { ArticleCreateFormModal } from '@/features/createArticle';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);
    const [isCreatingArticleOpened, setIsCreatingArticleOpened] = useState(false);

    const onCloseAuthModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowAuthModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onShowCreateArticleModal = useCallback(() => {
        setIsCreatingArticleOpened(true);
    }, []);

    const onCloseCreateArticleModal = useCallback(() => {
        setIsCreatingArticleOpened(false);
    }, []);

    const authData = useSelector(getUserAuthData);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <div>
                    <AppLink to="/">
                        <Text className={cls.appName} title={t('FTD APP')} />
                    </AppLink>
                    <Button theme={ThemeButton.CLEAR} onClick={onShowCreateArticleModal}>
                        {t('Create article')}
                    </Button>
                </div>

                <div className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </div>

                {isCreatingArticleOpened && (
                    <ArticleCreateFormModal
                        isOpen={isCreatingArticleOpened}
                        onClose={onCloseCreateArticleModal}
                    />
                )}
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.OUTLINE}
                className={cls.loginButton}
                onClick={onShowAuthModal}
            >
                {t('Login')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseAuthModal} />}
        </div>
    );
});
