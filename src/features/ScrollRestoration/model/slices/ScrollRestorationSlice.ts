import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollRestorationSchema } from '../types/ScrollRestorationSchema';

const initialState: ScrollRestorationSchema = {
    scroll: {},
};

export const ScrollRestorationSlice = createSlice({
    name: 'ScrollRestoration',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: ScrollRestorationActions } = ScrollRestorationSlice;
export const { reducer: ScrollRestorationReducer } = ScrollRestorationSlice;
