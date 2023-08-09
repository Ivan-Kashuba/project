import { FC, lazy } from 'react';
import { CreateArticleFormProps } from './ArticleCreateForm';

export const ArticleCreateFormLazy = lazy<FC<CreateArticleFormProps>>(
    () => import('./ArticleCreateForm'),
);
