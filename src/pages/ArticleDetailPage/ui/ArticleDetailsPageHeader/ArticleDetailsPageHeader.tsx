import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailsPageHeader.module.scss';
import { getRouteArticles } from '@/shared/constants/router';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation('article');
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button onClick={onBackToList} theme={ThemeButton.OUTLINE}>
                {t('Back to list')}
            </Button>
        </div>
    );
});
