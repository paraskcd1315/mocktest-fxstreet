import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    status: 'idle',
    sidebarOpened: false
}

export const elementsSlice = createSlice({
    name: "elementsReducer",
    initialState,
    reducers: {
        toggleSidebar: (state) => ({...state, sidebarOpened: !state.sidebarOpened})
    }
});

export const { toggleSidebar } = elementsSlice.actions;

export default elementsSlice.reducer; 