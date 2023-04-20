import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';

import { Input } from 'shared/ui/Input/Input';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile')} />
                <Button theme={ThemeButton.OUTLINE}>
                    {t('Edit')}
                </Button>

            </div>
            <div className={cls.data}>
                <Input
                    label={t('Your name')}
                    value={data?.firstname}
                    placeholder={t('Your name')}
                    className={cls.input}
                />
                <Input
                    label={t('Your name')}
                    value={data?.lastname}
                    placeholder={t('Your name')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
