import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { articlesPageAction } from 'pages/ArticlesPage/model/slice/articlePageSlice';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';

export const fetchNextArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlePage',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;

        const page = getArticlesPageNum(getState());
        const hasMore = getArticlesPageHasMore(getState());
        const isLoading = getArticlesPageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageAction.setPage(page + 1));
            dispatch(fetchArticlesList({}));
        }
    },
);
