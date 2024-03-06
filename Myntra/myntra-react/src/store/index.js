import {configureStore} from '@reduxjs/toolkit';
import productSlice from './ProductSlice';
import fetchStoreSlice from './FetchStatus';
import bagSlice from './Bag';

//configure store
export const myntraStore = configureStore({
    //root reducer
    reducer: {
        products: productSlice,
        fetchStatus: fetchStoreSlice,
        Bag: bagSlice
    }
})

export default myntraStore;
