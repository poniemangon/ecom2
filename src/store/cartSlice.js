import { createSlice } from '@reduxjs/toolkit'


const loadTotalFromLocalStorage = () => {
  try {
    const totalData = localStorage.getItem('total');
    if (totalData) {
      return JSON.parse(totalData);
    }
  } catch (error) {
    console.error('Error loading total from local storage:', error);
  }
  return 0;
};



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
  cart: loadCartFromLocalStorage(),
  total: loadTotalFromLocalStorage()
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
    plusById: (state, action) => {
      
      const productId = action.payload.id;
    
      // Find the product by id in the cart
      const updatedCart = state.cart.map((product) => {
        if (product.id == productId) {

          // Increment the quantity by 1 for the matching product
          return {
            ...product,
            quantity: product.quantity + 1
            
          };
        }
        return product;
      });
 
      // Update the cart in the state
      state.cart = updatedCart;
    
      // Save the updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    },
    minusById: (state, action) => {
      const productId = action.payload.id;
    
      // Find the product by id in the cart
      const updatedCart = state.cart.map((product) => {
        if (product.id === productId) {
          // Increment the quantity by 1 for the matching product
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });
    
      // Update the cart in the state
      state.cart = updatedCart;
    
      // Save the updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    },
    clearCart: (state) => {
      state.cart = []
      localStorage.removeItem('cart');
    },
    getTotal: (state) => {
      const total = state.cart.reduce((acc, e)=>{
        return acc + e.quantity * e.price;
      }, 0);
      state.total = total
      localStorage.setItem('cart', JSON.stringify(state.cart));
    } 
  },


})


export const { addToCart, removeById, clearCart, getTotal, plusById, minusById } = cartSlice.actions

export default cartSlice.reducer

