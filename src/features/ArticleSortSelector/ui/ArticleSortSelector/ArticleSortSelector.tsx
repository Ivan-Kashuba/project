import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select/Select';
import { SortOrder } from '@/shared/types/sort';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '@/entities/Article';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo(
    ({
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
    }: ArticleSortSelectorProps) => {
        const { t } = useTranslation();

        const orderOptions = useMemo<SelectOption<SortOrder>[]>(
            () => [
                {
                    value: 'asc',
                    content: t('increasing'),
                },
                {
                    value: 'desc',
                    content: t('decreasing'),
                },
            ],
            [t],
        );

        const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
            () => [
                {
                    value: ArticleSortField.CREATED,
                    content: t('created date'),
                },
                {
                    value: ArticleSortField.TITLE,
                    content: t('title'),
                },
                {
                    value: ArticleSortField.VIEWS,
                    content: t('views'),
                },
            ],
            [t],
        );

        return (
            <div
                className={classNames(cls.ArticleSortSelector, {}, [className])}
            >
                <Select
                    value={sort}
                    options={sortFieldOptions}
                    label={t('Sort by')}
                    onChange={onChangeSort}
                />
                <Select
                    value={order}
                    options={orderOptions}
                    label={t('By')}
                    onChange={onChangeOrder}
                    className={cls.order}
                />
            </div>
        );
    },
);
