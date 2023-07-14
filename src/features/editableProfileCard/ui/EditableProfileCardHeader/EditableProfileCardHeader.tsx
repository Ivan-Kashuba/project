import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import cls from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo(({ className }: EditableProfileCardHeaderProps) => {
    const { t } = useTranslation('profile');

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);
    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile')} />
                {canEdit && (
                    <div className={cls.btnWrapper}>
                        {readonly ? (
                            <Button className={cls.editBtn} theme={ThemeButton.OUTLINE} onClick={onEdit}>
                                {t('Edit')}
                            </Button>
                        )
                            : (
                                <>
                                    <Button
                                        className={cls.editBtn}
                                        theme={ThemeButton.OUTLINE_RED}
                                        onClick={onCancelEdit}
                                    >
                                        {t('Cancel')}
                                    </Button>

                                    <Button
                                        className={cls.saveBtn}
                                        theme={ThemeButton.OUTLINE}
                                        onClick={onSave}
                                    >
                                        {t('Save')}
                                    </Button>

                                </>
                            )}
                    </div>
                )}
            </div>
        </div>
    );
});
