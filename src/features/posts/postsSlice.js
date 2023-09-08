import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchPosts } from "./postsAPI"

const initialState = {
    status: 'idle',
    posts: []
}

export const loadPostsAsync = createAsyncThunk(
    'posts/loadPosts',
    async (value = undefined, { rejectWithValue }) => {
        const postsData = await fetchPosts();
        if (postsData && postsData.error) {
            return rejectWithValue([]);
        }

        return postsData;
    }
);

export const postsSlice = createSlice({
    name: 'postsReducer',
    initialState,
    reducers: {
        likePost: (state, action) => {
            const id = action.payload;

            const modifiedPosts = state.posts.map(post => {
                if (post.id === id) {
                    let newPost = post;
                    if ('liked' in post) {
                        delete newPost.liked;
                    } else {
                        newPost.liked = true
                    }
                    return newPost;
                } else {
                    return post;
                }
            });

            state.posts = modifiedPosts;
        },
        savePost: (state, action) => {
            const id = action.payload;

            const modifiedPosts = state.posts.map(post => {
                if (post.id === id) {
                    let newPost = post;
                    if ('saved' in post) {
                        delete newPost.saved;
                    } else {
                        newPost.saved = true
                    }
                    return newPost;
                } else {
                    return post;
                }
            });

            state.posts = modifiedPosts;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadPostsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadPostsAsync.rejected, (state) => {
                state.status = 'idle';
            })
            .addCase(loadPostsAsync.fulfilled, (state, action) => {
                const postsData = action.payload;
                state.status = 'idle';
                state.posts = postsData;
            })
    }
});

export const { likePost, savePost } = postsSlice.actions;

export default postsSlice.reducer;