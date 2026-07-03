import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = {
  token: null,
  farmer: null,
};

export const useAuthStore = create(
  persist(
    (set) => ({
      ...initialState,

      setToken: (token) => {
        set({ token });
      },

      setFarmer: (farmer) => {
        set({ farmer });
      },

      setAuth: ({ token, farmer }) => {
        set({
          token,
          farmer,
        });
      },

      logout: () => {
        set(initialState);
      },
    }),
    {
      name: 'farmer-auth-storage',
      partialize: (state) => ({
        token: state.token,
        farmer: state.farmer,
      }),
    },
  ),
);