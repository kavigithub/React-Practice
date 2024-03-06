import { createSlice } from "@reduxjs/toolkit";

const fetchStoreSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchDone: false, // true : "DONE" and false : "PENDING"
        currentlyFetching: false
    },
    reducers: {
        isFetchingDone : (state) => {state.fetchDone = true},
        isCurrentFetchingStart: (state) => {state.currentlyFetching = true},
        isCurrentFetchingFinish: (state) =>  {state.currentlyFetching = false}
    }
});

// Action Creators
export const { 
    isFetchingDone,     
    isCurrentFetchingStart,
    isCurrentFetchingFinish} = fetchStoreSlice.actions;

//export slice reducer    
export default fetchStoreSlice.reducer;    

