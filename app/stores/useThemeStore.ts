import { create } from 'zustand';

// TODO: Create a Zustand store with:
// - isDark: boolean (default false)
// - toggleTheme: () => void
// Export the store hook

interface ThemeStore {
  isDark: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  isDark: false,
  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
}));