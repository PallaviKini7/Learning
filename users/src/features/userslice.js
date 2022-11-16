import { createSlice } from "@reduxjs/toolkit";


 export const userSlice = createSlice(
  {
    name:'user',
    initialstate:
    {
      user:null
    },
    reducers:{
      login:(state,action) =>
      {
        state.user= action.payload
      },
      logout:(state)=>
      {
        state.user =null
      }
     
    }



  }
)
export const {login,logout} = userSlice.actions
export const selecetUser = (state) => state.user.user
export default userSlice.reducer;