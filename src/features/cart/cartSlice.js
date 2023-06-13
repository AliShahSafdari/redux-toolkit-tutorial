import { createSlice } from "@reduxjs/toolkit";

const initialStat = {
    cartItems : [],
    amount:0,
    total:0,
    isLoading:true,
};

const cartSlice = createSlice({
 name:'cart',
 initialStat,
});

// console.log(cartSlice);

export default cartSlice.reducer;