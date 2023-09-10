import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice';
import elementsReducer from '../features/elements/elementsSlice';

export const store = configureStore({
    reducer: {
        postsReducer: postsReducer,
        elementsReducer: elementsReducer
    }
});