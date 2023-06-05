import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../slice/articleDetailsSlice';

interface ArticleDetailsProps {
    className?: string;
}

const reducers:ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className }: ArticleDetailsProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchArticleById('1'));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>

            <div className={classNames(cls.ArticleDetails, {}, [className])}>{t('ArticleDetails')}</div>

        </DynamicModuleLoader>
    );
});
