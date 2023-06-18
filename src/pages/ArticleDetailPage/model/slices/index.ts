import { combineReducers } from '@reduxjs/toolkit';
import {
    articleDetailsPageRecommendationsReducer,
} from 'pages/ArticleDetailPage/model/slices/articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailPage/model/slices/articleDetailsCommentsSlice';
import { ArticleDetailsPageSchema } from '../types';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});
