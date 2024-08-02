import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist(
    set => ({
      allProducts: [],

      fetchProducts: async () => {
        try {
          const response = await fetch('https://649009021e6aa71680ca6400.mockapi.io/items')
          const data = await response.json()
          set({ allProducts: data })
        } catch (error) {
          alert('Произошла ошибка при загрузке данных')
          console.log(error)
        }
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
      removeItem: id =>
        set(state => ({ cartItems: state.cartItems.filter(item => item.id !== id) })),
      reviews: [],
      fetchReviews: async () => {
        try {
          const response = await fetch('https://649009021e6aa71680ca6400.mockapi.io/reviews')
          const reviewsData = await response.json()
          set({ reviews: reviewsData })
        } catch (error) {
          alert('Произошла ошибка при загрузке данных')
          console.log(error)
        }
      },
    }),
    {
      name: 'my-storage',
      createJSONStorage: () => localStorage,
    },
  ),
)
