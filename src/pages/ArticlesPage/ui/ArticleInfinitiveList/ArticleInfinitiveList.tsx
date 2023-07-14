import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getArticles } from '../../model/slice/articlePageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageIsView,
} from '../../model/selectors/articlesPageSelectors';
import cls from './ArticleInfinitiveList.module.scss';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';

interface ArticleInfinitiveListProps {
    className?: string;
}

export const ArticleInfinitiveList = memo(({ className }: ArticleInfinitiveListProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('article');
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageIsView);
    const error = useSelector(getArticlesPageError);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return <Text title={t('Something went wrong')} theme={TextTheme.ERROR} />;
    }

    return (
        <div className={classNames(cls.ArticleInfinitiveList, {}, [className])}>
            <ArticleList isLoading={isLoading} view={view} articles={articles} className={cls.list} />
        </div>
    );
});
