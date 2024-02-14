import {configureStore} from '@reduxjs/toolkit';
import productSlice from './ProductSlice';
import fetchStoreSlice from './FetchStatus';


//configure store
export const myntraStore = configureStore({
    //root reducer
    reducer: {
        products: productSlice,
        fetchStatus: fetchStoreSlice
    }
})

export default myntraStore;
