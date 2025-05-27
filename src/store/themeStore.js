import { create } from 'zustand';

const useThemeStore = create((set) => ({
  isDev: false,
  toggleDevMode: () => set((state) => ({ isDev: !state.isDev })),
}));

export default useThemeStore;