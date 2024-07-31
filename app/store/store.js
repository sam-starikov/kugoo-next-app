import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist(
    set => ({
      allProducts: [],

      fetchProducts: async () => {
        const response = await fetch('https://649009021e6aa71680ca6400.mockapi.io/items')
        const data = await response.json()
        set({ allProducts: data })
      },
      cartItems: [],
      addToCart: product =>
        set(state => {
          const existingItem = state.cartItems.find(item => item.id === product.id)

          if (existingItem) {
            return {
              cartItems: state.cartItems.filter(item => item.id !== product.id),
            }
          } else {
            return {
              cartItems: [...state.cartItems, product],
            }
          }
        }),
    }),
    {
      name: 'my-storage',
      createJSONStorage: () => localStorage,
    },
  ),
)
