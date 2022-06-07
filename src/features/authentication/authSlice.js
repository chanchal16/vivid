import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null || JSON.parse(localStorage.getItem('user')),
    error: "",
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    LOGIN: (state,action) => {
      state.user = action.payload
      
    },
    SIGNUP:(state,action)=>{
        state.user = action.payload
    },
    LOGOUT: (state) => {
      state.user = '',
      localStorage.setItem('user',null)
    },
    FAILURE: (state, action) => {
      state.error = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { LOGIN, SIGNUP, LOGOUT, FAILURE } = authSlice.actions
export default authSlice.reducer