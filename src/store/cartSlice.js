import { createSlice } from '@reduxjs/toolkit'






const loadCartFromLocalStorage = () => {
  try {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      return JSON.parse(cartData);
    }
  } catch (error) {
    console.error('Error loading cart from local storage:', error);
  }
  return [];
};

const initialState = {
  cart: loadCartFromLocalStorage()
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
      localStorage.setItem('cart', JSON.stringify(state.cart));
    
    },
    removeById: (state, action)=>{

      let newArr = state.cart.filter(e => e.id !== action.payload.id)
      state.cart = newArr;
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = []
      localStorage.removeItem('cart');
    }
  },

})


export const { addToCart, removeById, clearCart } = cartSlice.actions

export default cartSlice.reducer

