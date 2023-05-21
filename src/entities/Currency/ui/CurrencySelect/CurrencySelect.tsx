import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback, useMemo } from 'react';
import { Currency } from 'entities/Currency';

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
        <Select
            className={classNames('', {}, [className])}
            label={t('Select currency')}
            options={CurrencyOptions}
            value={value}
            onChange={onChangeHandler}
            readOnly={readOnly}
        />
    );
});
