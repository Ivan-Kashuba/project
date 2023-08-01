import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { ArticleList } from '@/entities/Article';
import { useGetArticleRecommendationsListQuery } from '../../api/articleRecommendationsApi';
import cls from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation('article');

    const {
        isLoading, data: recommendationArticles, isError,
    } = useGetArticleRecommendationsListQuery(4);

    if (isLoading || isError || !recommendationArticles) {
        return null;
    }

    if (isError) {
        return (
            <Text
                theme={TextTheme.ERROR}
                title={t('Something went wrong')}
                text={t("Can't load recommendations")}
            />
        );
    }

    return (
        <div data-testid="ArticleRecommendationsList" className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                className={cls.commentTitle}
                title={t('Recommend')}
            />
            <ArticleList
                articles={recommendationArticles}
                isLoading={isLoading}
                className={cls.recommendations}
                target="_blank"
            />
        </div>
    );
});
