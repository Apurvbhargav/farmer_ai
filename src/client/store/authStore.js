import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      farmer: null,

      setToken: (token) => {
        set({ token });
      },

      setFarmer: (farmer) => {
        set({ farmer });
      },

      setAuth: ({ token, farmer }) => {
        set({ token, farmer });
      },

      logout: () => {
        set({
          token: null,
          farmer: null,
        });
      },
    }),
    {
      name: 'farmer-auth-storage',
    },
  ),
);