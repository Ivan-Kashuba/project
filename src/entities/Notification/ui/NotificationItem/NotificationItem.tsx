import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import { Notification } from '../../model/types/notifications';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    data: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, data } = props;

    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(cls.NotificationItem, {}, [className])}
        >
            <Text title={data.title} text={data.description} />
        </Card>
    );

    if (data.href) {
        return (
            <a className={cls.link} href={data.href} target="_blank" rel="noreferrer">
                {content}
            </a>
        );
    }

    return content;
});
