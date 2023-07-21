import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-icon.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    return (
        <div>
            <Popover
                trigger={<Button theme={ThemeButton.CLEAR}><Icon Svg={NotificationIcon} className={cls.notificationIcon} /></Button>}
                direction="bottom left"
                className={classNames(cls.NotificationButton, {}, [className])}
            >
                <NotificationList className={cls.notifications} />
            </Popover>
        </div>
    );
});
