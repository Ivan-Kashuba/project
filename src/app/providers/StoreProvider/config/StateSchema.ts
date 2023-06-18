import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleDetailsCommentsSchema, ArticleDetailsRecommendationsSchema, ArticleDetailsPageSchema } from 'pages/ArticleDetailPage';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticlePageSchema } from 'pages/ArticlesPage';
import { ScrollRestorationSchema } from 'features/ScrollRestoration';

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    scrollRestoration:ScrollRestorationSchema

    // Async reducers
    profile?: ProfileSchema
    login?: LoginSchema;
    articleDetails?: ArticleDetailsSchema
    addCommentFormSchema?: AddCommentFormSchema
    articlesPage?: ArticlePageSchema
    articleDetailsPage?:ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema
}
