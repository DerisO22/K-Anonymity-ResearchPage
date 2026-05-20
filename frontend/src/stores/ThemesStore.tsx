import { create } from 'zustand';

export type ThemeType = 'light' | 'dark';

export interface ThemeStoreType {
    theme: 'light' | 'dark',
    actions: {
        toggleTheme: () => void,
        setTheme: (newTheme: ThemeType) => void,
    }
}

export const useThemeStore = create<ThemeStoreType>((set) => ({
    theme: 'light',

    actions: {
        toggleTheme: () => 
            set((state) => ({
                theme: state.theme === 'light' ? 'dark' : 'light'
            })),
        setTheme: (newTheme: ThemeType) => set({ theme: newTheme })
    }
}));

export const useTheme = () => useThemeStore((state) => state.theme);
export const useThemeActions = () => useThemeStore((state) => state.actions);