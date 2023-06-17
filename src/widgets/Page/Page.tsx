import { classNames } from 'shared/lib/classNames/classNames';
import {
    MutableRefObject, ReactNode, useRef, UIEvent,
} from 'react';
import { useInfinitiveScroll } from 'shared/lib/hooks/useInfinitiveScroll/useInfinitiveScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getScrollRestorationScrollByPath, ScrollRestorationActions } from 'features/ScrollRestoration';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page = ({ className, children, onScrollEnd }: PageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state:StateSchema) => getScrollRestorationScrollByPath(state, pathname));

    useInfinitiveScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e:UIEvent<HTMLDivElement>) => {
        dispatch(ScrollRestorationActions.setScrollPosition({ path: pathname, position: e.currentTarget.scrollTop }));
    }, 500);

    return (
        <section onScroll={onScroll} ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
            {children}
            {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
        </section>
    );
};
