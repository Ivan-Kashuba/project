import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useCallback, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-icon.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { useDetectDevice } from 'shared/lib/hooks/useDevice/useDevice';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useDetectDevice();

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button
            onClick={onOpenDrawer}
            theme={ThemeButton.CLEAR}
        >
            <Icon Svg={NotificationIcon} className={cls.notificationIcon} />
        </Button>
    );
    console.log('isMobile:', isMobile);
    return (
        <div>
            {isMobile ? (
                <>
                    {trigger}
                    <AnimationProvider>
                        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                            <NotificationList />
                        </Drawer>
                    </AnimationProvider>
                </>
            ) : (
                <Popover
                    trigger={trigger}
                    direction="bottom left"
                    className={classNames(cls.NotificationButton, {}, [className])}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            )}

        </div>
    );
});
