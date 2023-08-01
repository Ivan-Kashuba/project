import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleView } from '../../model/const/articleConst';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Article } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((item, index) => (
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

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className])}>
                <Text size={TextSize.L} title={t('Articles are not found')} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])} data-testid="ArticleList">

            {articles.map((item) => (
                <ArticleListItem
                    article={item}
                    view={view}
                    target={target}
                    key={item.id}
                    className={cls.card}
                />
            ))}

            {isLoading && getSkeletons(view)}
        </div>
    );
});
