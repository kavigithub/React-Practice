import { configureStore } from '@reduxjs/toolkit';
import privacySlice from './privacyStore';
import counterSlice from './counterStore';

//store create
const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        isVisible: privacySlice.reducer
    }
})


export default counterStore