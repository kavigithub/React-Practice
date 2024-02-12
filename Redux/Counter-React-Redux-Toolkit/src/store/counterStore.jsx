import {  createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counterVal: 0
    },
    reducers: {
        increment : (currentState) => {
           currentState.counterVal++
        },
        decrement : (currentState) => {
            currentState.counterVal--
        },
        add: (currentState, action) => {
            console.log(action, action.payload);
           currentState.counterVal += action.payload
        },
        subtract: (currentState, action) => {
            currentState.counterVal -= action.payload
        }
    }
});

//dispacth
//export const counterActions = counterSlice.actions;
export const {increment, decrement, add, subtract} = counterSlice.actions;

export default counterSlice;