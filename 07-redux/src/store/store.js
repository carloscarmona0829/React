import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../slices/counterSlice'
import shoppingSlice from '../slices/shoppingSlice'


export const store = configureStore({
  reducer: {
    counter: counterSlice,
    shopping: shoppingSlice
  },
})