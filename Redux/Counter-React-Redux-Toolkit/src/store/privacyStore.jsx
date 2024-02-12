import {  createSlice } from '@reduxjs/toolkit';

const privacySlice = createSlice({
    name: 'isVisible',
    initialState: true,
    reducers: {
        toggle : (state) => {
            return state = !state
        }
    }
})

//action dispacthj
export const {toggle} = privacySlice.actions;

export default privacySlice;