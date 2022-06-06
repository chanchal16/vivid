import { createSlice } from '@reduxjs/toolkit'
import { followUser, unFollowUser } from 'features/profile/profileSlice'

const initialState = {
    user: null || JSON.parse(localStorage.getItem('user')),
    error: "",
}
// check the followings of usr
export let userFollowing = initialState?.user?.user?.following
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
  extraReducers: (builder) => {
    builder
    .addCase(followUser.fulfilled,(state,action)=>{
      userFollowing = action.payload.user
    })
    .addCase(unFollowUser.fulfilled,(state,action)=>{
      userFollowing = action.payload.user
    })
  }
})

// Action creators are generated for each case reducer function
export const { LOGIN, SIGNUP, LOGOUT, FAILURE } = authSlice.actions
export default authSlice.reducer