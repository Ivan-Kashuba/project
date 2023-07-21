import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { ListBox } from 'shared/ui/Popups/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readOnly?:boolean
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { t } = useTranslation();
    const {
        value, className, onChange, readOnly,
    } = props;

    const CurrencyOptions = useMemo(() => Object.entries(Currency).map((cur) => {
        const option = { value: cur[0], content: cur[1] };
        return option;
    }), []);

    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <ListBox
            className={classNames('', {}, [className])}
            onChange={onChangeHandler}
            value={value}
            items={CurrencyOptions}
            defaultValue={t('Select currency')}
            readonly={readOnly}
            direction="top right"
            label={t('Select currency')}
        />
    );
});
