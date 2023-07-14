import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { EditableProfileCard } from 'features/editableProfileCard';
import { fetchProfileData } from 'features/editableProfileCard/model/services/fetchProfileData/fetchProfileData';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('profile');

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    if (!id) {
        return <Text title={t('Profile not found')} theme={TextTheme.ERROR} />;
    }

    return (
        <Page>
            <div className={classNames('', {}, [className])}>
                <EditableProfileCard id={id} />
            </div>
        </Page>
    );
};

export default ProfilePage;
