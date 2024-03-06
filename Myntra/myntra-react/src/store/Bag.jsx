import { createSlice } from "@reduxjs/toolkit";

let bagSlice = createSlice({
    name: "Bag",
    initialState: [],
    reducers: {
        addToBag : (currentState, action) => {
            currentState.push(action.payload)
        },
        removeFromBag: (currentState, action) => {
           /*  const index = currentState.indexOf(action.payload);
            console.log(index);
            if (index > -1){
                return [...currentState.slice(0, index), ...currentState.slice(index+1)];
            } else{         
                console.log("The product is not in the bag");  
            } */ 

            /* Calling this redux#ActionCreator(removeFromBag()) with an argument will return a PayloadAction of type T with a payload of P */

            return currentState.filter((itemId) => itemId !== action.payload)
        }
    }
});
//Calling this redux#ActionCreator with an argument will return a PayloadAction of type T with a payload of P

// Action creators are generated for each case reducer function
export const {addToBag,removeFromBag} = bagSlice.actions;    

export default bagSlice.reducer;                          