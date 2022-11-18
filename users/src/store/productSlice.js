import {createSlice} from '@reduxjs/toolkit'

const STATUSES =object.freeze({
    IDLE :'idle',
    ERROR :'error',
    LOADING:'loading'
})

const productSlice = createSlice({
    name :'product',
    
    initialState:
    {

        data:[],
        status:STATUSES.IDLE,
    },
    reducers:
    {
      setProduct(state, action){
        state.data = action.payload

      }
    }
})

export const {add,remove} = productSlice.actions;
export default productSlice.reducer;