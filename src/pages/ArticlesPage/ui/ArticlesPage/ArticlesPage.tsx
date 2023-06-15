import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageIsView,
} from '../../model/selectors/articlesPageSelectors';
import { articlesPageAction, articlesPageReducer, getArticles } from '../../model/slice/articlePageSlice';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageIsView);
    const error = useSelector(getArticlesPageError);

    const onChangeView = useCallback((view:ArticleView) => {
        dispatch(articlesPageAction.setView(view));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchArticlesList({
            page: 1,
        }));
        dispatch(articlesPageAction.initState());
    });

    return (
        <Page onScrollEnd={onLoadNextPart}>
            <DynamicModuleLoader reducers={reducers}>
                <div className={classNames(cls.ArticlesPage, {}, [className])}>
                    <ArticleViewSelector view={view} onViewClick={onChangeView} />
                    <ArticleList isLoading={isLoading} view={view} articles={articles} />
                </div>
            </DynamicModuleLoader>
        </Page>
    );
};

export default memo(ArticlesPage);
