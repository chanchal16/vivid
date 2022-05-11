import { configureStore } from '@reduxjs/toolkit'
import authReducer from 'features/authentication/authSlice'

export const store = configureStore({
  reducer: {
    auth:authReducer
  },
})