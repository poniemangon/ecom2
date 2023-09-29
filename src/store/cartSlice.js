import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action)=>{ 
      let exists = state.cart.some(p => p.id === action.payload.id)

      if(exists){
        let newArr = state.cart.map( (e) => {
          if(e.id === action.payload.id){
            return {...e, quantity: e.quantity + action.payload.quantity}
          }
          else {
            return e 
          }
        })
        state.cart = newArr;
      } 
      else {
        state.cart = [...state.cart, action.payload] 
      } 

    
    },
    removeById: (state, action)=>{
      let newArr = state.cart.filter(e => e.id !== id)
      state.cart = newArr;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeById } = cartSlice.actions

export default cartSlice.reducer

