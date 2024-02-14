import { createSlice } from "@reduxjs/toolkit";

const fetchStoreSlice = createSlice({
    name: 'fetchingStatus',
    initialState: {
        isFetchingDone: false, // true : "DONE" and false : "PENDING"
        currentlyFetching: false
    },
    reducers: {
        isFetchingDone : (state) => {
            return state.isFetchingDone = true
        },
        isCurrentFetchingStart: (state) => {
            return state.currentlyFetching = true;
        },
        isCurrentFetchingDone: (state) => {
            return state.currentlyFetching = false;
        }
    }
});

// Action Creators
export const { 
    isFetchingDone,     
    isCurrentFetchingStart,
    isCurrentFetchingDone} = fetchStoreSlice.actions;

//export slice reducer    
export default fetchStoreSlice.reducer;    

