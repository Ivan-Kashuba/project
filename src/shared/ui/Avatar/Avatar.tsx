import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number
}

export const Avatar = (props: AvatarProps) => {
    const { src, className, size } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
        minWidth: size || 100,
        minHeight: size || 100,
    }), [size]);

    return (
        <img
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            alt="#"
        />
    );
};
