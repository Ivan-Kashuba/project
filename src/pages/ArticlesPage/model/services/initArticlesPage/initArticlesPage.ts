import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { articlesPageAction } from 'pages/ArticlesPage/model/slice/articlePageSlice';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { SortOrder } from 'shared/types';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;

        const inited = getArticlesPageInited(getState());

        if (!inited) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const sortFromUrl = searchParams.get('sort') as ArticleSortField;
            const searchFromUrl = searchParams.get('search');
            const typeFromUrl = searchParams.get('type') as ArticleType;

            if (orderFromUrl) {
                dispatch(articlesPageAction.setOrder(orderFromUrl));
            }

            if (sortFromUrl) {
                dispatch(articlesPageAction.setSort(sortFromUrl));
            }

            if (searchFromUrl) {
                dispatch(articlesPageAction.setSearch(searchFromUrl));
            }

            if (typeFromUrl) {
                dispatch(articlesPageAction.setType(typeFromUrl));
            }

            dispatch(fetchArticlesList({}));
            dispatch(articlesPageAction.initState());
        }
    },
);