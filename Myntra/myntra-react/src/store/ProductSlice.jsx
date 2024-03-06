import { createSlice } from "@reduxjs/toolkit";

//create slice
const productSlice = createSlice({
    name:  "products",
    initialState: [],
    reducers: {
        addInitailProdcts: ( action) => {
            return action.payload; //list of items
        }
    }
});

export const {addInitailProdcts} = productSlice.actions;

export default productSlice.reducer;

