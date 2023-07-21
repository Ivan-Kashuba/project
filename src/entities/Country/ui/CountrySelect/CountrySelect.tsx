import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { ListBox } from 'shared/ui/Popups/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

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

    const CountriesOptions = useMemo(() => Object.entries(Country).map((cur) => {
        const option = { value: cur[0], content: cur[1] };
        return option;
    }), []);

    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            className={classNames('', {}, [className])}
            onChange={onChangeHandler}
            value={value}
            items={CountriesOptions}
            defaultValue={t('Select country')}
            readonly={readOnly}
            direction="top right"
            label={t('Select country')}
        />
    );
});
