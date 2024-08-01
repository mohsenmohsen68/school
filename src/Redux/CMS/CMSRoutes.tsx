import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:'cms',
    initialState:"",
    reducers:{
       selectOption: (state,action)=>{
        return action.payload
       }
    }

})

export default slice.reducer;
export const {selectOption} = slice.actions
