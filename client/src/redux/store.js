import { configureStore } from '@reduxjs/toolkit'
import authSlice  from './Slice/authSlice'


export const store = configureStore({
  reducer: {
    auth:authSlice,
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware(),
  devTools:true,
})
