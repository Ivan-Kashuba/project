import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import UAIcon from '@/shared/assets/icons/ua-flag.svg';
import USAIcon from '@/shared/assets/icons/usa-flag.svg';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleLanguage}
            className={classNames('', {}, [className])}
        >
            {i18n.language === 'en'
                ? (
                    <UAIcon width={30} />
                )
                : (
                    <USAIcon width={30} />
                )}
        </Button>
    );
});
