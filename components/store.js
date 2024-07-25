import { create } from 'zustand';

const getPersistedProducts = () => {
  const savedProducts = localStorage.getItem('allProducts');
  return savedProducts ? JSON.parse(savedProducts) : [];
};

// Создаем хранилище Zustand
const useStore = create(set => ({
  allProducts: getPersistedProducts(),
  fetchProducts: async () => {
    try {
      const response = await fetch('https://649009021e6aa71680ca6400.mockapi.io/items');
      const data = await response.json();
      set({ allProducts: data });
      localStorage.setItem('allProducts', JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  },

  products: JSON.parse(localStorage.getItem('products')) || [],

  addProduct: product => {
    set(state => {
      const updatedProducts = [...state.products, product];
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      return { products: updatedProducts };
    });
  },

  removeProduct: productId => {
    set(state => {
      const updatedProducts = state.products.filter(product => product.id !== productId);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      return { products: updatedProducts };
    });
  },

  clearProducts: () => {
    set({ products: [] });
    localStorage.removeItem('products');
  },
}));

export default useStore;
