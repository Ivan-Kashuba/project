import {
    ImgHTMLAttributes, memo, ReactElement, useEffect, useLayoutEffect, useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string
    fallback?: ReactElement
    errorFallback?: ReactElement
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        className, src, alt = '', fallback, errorFallback, ...otherProps
    } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setHasError(true);
        };
    }, [src]);

    if (hasError && errorFallback) {
        return errorFallback;
    }

    if (isLoading && fallback) {
        return fallback;
    }

    return <img className={className} src={src} alt={alt} {...otherProps} />;
});
