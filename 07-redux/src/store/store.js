import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../slices/counterSlice'
import shoppingReducer from '../slices/shoppingReducer'


export const store = configureStore({
  reducer: {
    counterSlice,
    shoppingReducer,
  },
})