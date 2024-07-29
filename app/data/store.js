import { create } from 'zustand'

export const useStore = create(set => ({
  cartItems: [],
  addToCart: product => set(state => ({ cartItems: [...state.cartItems, product] })),
}))
