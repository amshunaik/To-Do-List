import { createSlice,configureStore } from "@reduxjs/toolkit";

const initial={add:false,delete:false,val:[]};
const t1=createSlice({
    name:'toto',
    initialState:initial,
    reducers:{
        add(state){
            state.add=true;
            state.val.append();
            
        },
        delete(state){
            state.delete=true;
        }

    }
})
const store=configureStore({
    reducer:t1.reducer
})

export const todoact=t1.actions;
export default store;