import { Story } from '@storybook/react';
import { Theme } from '@/shared/constants/theme';
// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
