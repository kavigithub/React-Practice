import { createSlice } from "@reduxjs/toolkit";
import { products } from "../Data/product";
//create slice
const productSlice = createSlice({
    name:  "products",
    initialState: products,
    reducers: {
        addInitailProdcts: (currentState, action) => {
            console.log(currentState, action);
            return action.payload;
        }
    }
});

export const {addInitailProdcts} = productSlice.actions;

export default productSlice.reducer;

