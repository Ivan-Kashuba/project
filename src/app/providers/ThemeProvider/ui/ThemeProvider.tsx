import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { Theme } from '@/shared/constants/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/constants/localStorage';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK;

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
    const { initialTheme, children } = props;

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
