import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../slices/counterSlice'
import shoppingReducer from '../slices/shoppingReducer'
import crudReducer from '../slices/crudReducer'


export const store = configureStore({
  reducer: {
    counterSlice,
    shoppingReducer,
    crudReducer
  },
})