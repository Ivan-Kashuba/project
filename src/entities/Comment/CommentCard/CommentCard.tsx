import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text/Text';
import DefaultAvatar from '@/shared/assets/icons/defaultAvatar.png';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import cls from './CommentCard.module.scss';
import { Comment } from '../model/types/comment';
import { getRouteProfile } from '@/shared/constants/router';

interface CommentCardProps {
    className?: string
    comment?: Comment
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;
    if (isLoading) {
        return (
            <div data-testid="CommentCard.Loading" className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={cls.username} />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div data-testid="CommentCard.Content" className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={getRouteProfile(comment.user.id)}>
                <div className={cls.header}>
                    <Avatar size={30} src={comment.user.avatar || DefaultAvatar} />
                    <Text className={cls.username} title={comment.user.username} />
                </div>
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </div>
    );
});
