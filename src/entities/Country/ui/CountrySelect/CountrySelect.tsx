import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback, useMemo } from 'react';
import { Country } from '../..';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (country: Country) => void;
    readOnly?:boolean
}

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { t } = useTranslation();

    const {
        value, className, onChange, readOnly,
    } = props;

    const CurrencyOptions = useMemo(() => Object.entries(Country).map((cur) => {
        const option = { value: cur[0], content: cur[1] };
        return option;
    }), []);

    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Select country')}
            options={CurrencyOptions}
            value={value}
            onChange={onChangeHandler}
            readOnly={readOnly}
        />
    );
});
