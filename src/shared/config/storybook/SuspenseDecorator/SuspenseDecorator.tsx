import { Story } from '@storybook/react';
import { Suspense } from 'react';

export const SuspenseDecorator = (StoryComponents:Story) => (
    <Suspense>
        <StoryComponents />
    </Suspense>
);
