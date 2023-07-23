import '@/app/styles/index.scss';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from '@/features/addCommentForm/model/slice/addCommentForm';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailPage/model/slices';
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';

const defaultAsyncReducers: ReducersList = {
    login: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentFormSchema: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
    initialState: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={initialState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
