import { configureStore } from '@reduxjs/toolkit'
import authReducer from 'features/authentication/authSlice';
import postReducer from 'features/posts/postSlice';
import profileReducer from 'features/profile/profileSlice';

export const store = configureStore({
  reducer: {
    auth:authReducer,
    post:postReducer,
    users:profileReducer
  },
})