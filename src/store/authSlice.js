import { createSlice } from '@reduxjs/toolkit'
import { login, loginGoogle } from './authThunk';


const initialState = {
    user: {},
    accessToken: "",
    isLogged: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // loginRedux: (state, action)=>{
    //   state.user = action.payload.email;
    //   state.accessToken = action.payload.accessToken;
    //   state.isLogged = true;
      
    // }

  },

  extraReducers: (builder)=>{
    builder.addCase(login.fulfilled, (state, action)=>{
      state.accessToken = action.payload.accessToken;
      state.isLogged = true;
    }),
    builder.addCase(loginGoogle, (state, action)=>{})
  }
})

// Action creators are generated for each case reducer function
export const { loginRedux } = authSlice.actions

export default authSlice.reducer