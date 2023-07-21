import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { useGetNotificationsQuery } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';

interface NotificationProps {
    className?: string;
}

export const NotificationList = memo(({ className }: NotificationProps) => {
    const { data: notifications, isLoading } = useGetNotificationsQuery(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <div className={classNames(cls.Notification, {}, [className])}>
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
            </div>
        );
    }

    return (
        <div className={classNames(cls.Notification, {}, [className])}>
            {notifications?.map((n) => <NotificationItem key={n.id} data={n} />)}
        </div>
    );
});
