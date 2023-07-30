import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage/AppImage';
import DefaultAvatar from '@/shared/assets/icons/avatar-default.svg';
import { Icon } from '../Icon/Icon';
import { Skeleton } from '../Skeleton/Skeleton';

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

    const fallback = <Skeleton height={size} width={size} border="50%" />;
    const errorFallback = <Icon Svg={DefaultAvatar} width={size} height={size} />;

    return (
        <AppImage
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            fallback={fallback}
            errorFallback={errorFallback}
            alt="#"
        />
    );
};
