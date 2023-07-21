import { memo, ReactNode } from 'react';
import { Popover as HeadlessPopover } from '@headlessui/react';
import { DropDownDirection } from 'shared/types/ui';
import { classNames } from 'shared/lib/classNames/classNames';
import { mapDirectionClass } from '../../styles/const';
import cls from './Popover.module.scss';
import popupCls from '../../styles/Popup.module.scss';

interface PopoverProps {
    className?: string
    trigger: ReactNode
    direction?: DropDownDirection
    children: ReactNode
}

export const Popover = memo((props: PopoverProps) => {
    const {
        className, trigger, direction = 'bottom right', children,
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (

        <HeadlessPopover className={classNames(cls.Popover, {}, [className, popupCls.Popup])}>
            <HeadlessPopover.Button className={popupCls.trigger}>{trigger}</HeadlessPopover.Button>

            <HeadlessPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HeadlessPopover.Panel>
        </HeadlessPopover>

    );
});
