import { createSlice } from "@reduxjs/toolkit";




const initialState ={
    username:"",
    password:""
}


const formSlice = createSlice({
    name:'form',
    initialState,
    reducers:{
        setUsername:(state,action)=>{
            state.username = action.payload
        },

        setPassword:(state,action)=>{
            state.password = action.payload
        },

        resetForm:()=>initialState
    }
})


export const { setUsername, setPassword, resetForm } = formSlice.actions;

export const selectForm = state => state.form;
export default formSlice.reducer;