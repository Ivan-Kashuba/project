import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view:ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((item, index) => (
    <ArticleListItemSkeleton
        className={cls.card}
        key={index}
        view={view}
    />
));

export const ArticleList = memo((props: ArticleListProps) => {
    const { t } = useTranslation('article');
    const {
        className, articles, isLoading, view = ArticleView.SMALL, target,
    } = props;

    const renderArticle = (article: Article) => (
        <ArticleListItem target={target} article={article} view={view} className={cls.card} key={article.id} />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className])}>
                <Text size={TextSize.L} title={t('Articles are not found')} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 ? articles.map((article) => renderArticle(article)) : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
