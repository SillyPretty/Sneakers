import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICart } from '../../model/interface'

const initialState: ICart[] = []

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    carts: initialState,
  },
  reducers: {
    AddToCart(state, action: PayloadAction<ICart>) {
      if (state.carts.some((item) => item.id === action.payload.id)) {
        state.carts = state.carts.filter(
          (filter) => filter.id !== action.payload.id
        )
        state.carts = state.carts.concat(action.payload)
        return
      }
      state.carts = state.carts.concat(action.payload)
    },
    RemoveToCart(state, action: PayloadAction<ICart>) {
      state.carts = state.carts.filter((filter) => filter === action.payload)
    },
  },
})

export const { AddToCart, RemoveToCart } = cartSlice.actions

export default cartSlice.reducer
