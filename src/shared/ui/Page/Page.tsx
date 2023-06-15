import { classNames } from 'shared/lib/classNames/classNames';
import { MutableRefObject, ReactNode, useRef } from 'react';
import { useInfinitiveScroll } from 'shared/lib/hooks/useInfinitiveScroll/useInfinitiveScroll';
import cls from './Page.module.scss';

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page = ({ className, children, onScrollEnd }: PageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfinitiveScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

    return (
        <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
            {children}
            <div ref={triggerRef} />
        </section>
    );
};
