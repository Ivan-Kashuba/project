import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { ArticleInfinitiveList } from '../ArticleInfinitiveList/ArticleInfinitiveList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { articlesPageReducer } from '../../model/slice/articlePageSlice';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    return (
        <Page data-testid="ArticlesPage" onScrollEnd={onLoadNextPart}>
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
                <div className={classNames(cls.ArticlesPage, {}, [className])}>
                    <ArticlesPageFilters />
                    <ArticleInfinitiveList />
                </div>
            </DynamicModuleLoader>
        </Page>
    );
};

export default memo(ArticlesPage);
