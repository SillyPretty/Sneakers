import { combineReducers, configureStore } from '@reduxjs/toolkit'

import cartSlice from './cart/cart.slice'

const rootReducer = combineReducers({
  cart: cartSlice,
})

export const store = configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
