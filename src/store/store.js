import { configureStore } from '@reduxjs/toolkit'
import authReducer from 'features/authentication/authSlice';
import postReducer from 'features/posts/postSlice'

export const store = configureStore({
  reducer: {
    auth:authReducer,
    post:postReducer
  },
})