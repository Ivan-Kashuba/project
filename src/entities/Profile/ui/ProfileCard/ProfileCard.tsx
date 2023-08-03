import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import DefaultAvatar from '@/shared/assets/icons/defaultAvatar.png';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    readonly?: boolean;
    error?: string;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency?: Currency) => void;
    onChangeCountry?: (country?: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        onChangeFirstName,
        onChangeLastName,
        readonly,
        onChangeCity,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const { t } = useTranslation('profile');

    const setOnlyNumber = (event: any) => {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    };

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    if (isLoading) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Something went wrong during profile loading')}
                    text={t('Try to reload page')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <Avatar src={data.avatar || DefaultAvatar} size={120} />
                )}
                <div className={cls.form}>
                    <Input
                        label={t('Your name')}
                        value={data?.firstname}
                        placeholder={t('Your name')}
                        className={cls.input}
                        readOnly={readonly}
                        onChange={onChangeFirstName}
                        data-testid="ProfileCard.firstname"
                    />

                    <Input
                        label={t('Your surname')}
                        value={data?.lastname}
                        placeholder={t('Your surname')}
                        className={cls.input}
                        readOnly={readonly}
                        onChange={onChangeLastName}
                        data-testid="ProfileCard.lastname"
                    />

                    <Input
                        label={t('Your username')}
                        value={data?.username}
                        placeholder={t('Your username')}
                        className={cls.input}
                        readOnly={readonly}
                        onChange={onChangeUsername}
                    />

                    <Input
                        label={t('Your age')}
                        value={data?.age}
                        placeholder={t('Your age')}
                        className={cls.input}
                        readOnly={readonly}
                        onChange={onChangeAge}
                        onKeyPress={setOnlyNumber}
                    />

                    <Input
                        label={t('Your city')}
                        value={data?.city}
                        placeholder={t('Your city')}
                        className={cls.input}
                        readOnly={readonly}
                        onChange={onChangeCity}
                    />

                    <Input
                        label={t('Your avatar')}
                        value={data?.avatar}
                        placeholder={t('Type your avatar link')}
                        className={cls.input}
                        readOnly={readonly}
                        onChange={onChangeAvatar}
                    />

                    <CurrencySelect
                        className={cls.input}
                        value={data?.currency}
                        onChange={onChangeCurrency}
                        readOnly={readonly}
                    />

                    <CountrySelect
                        className={cls.input}
                        value={data?.country}
                        onChange={onChangeCountry}
                        readOnly={readonly}
                    />
                </div>
            </div>
        </div>
    );
};
