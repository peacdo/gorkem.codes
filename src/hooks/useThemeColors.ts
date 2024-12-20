// src/hooks/useThemeColors.ts
import { useTheme } from '@/components/ThemeProvider';
import { themes } from '@/lib/theme';

export function useThemeColors() {
    const { theme } = useTheme();
    return themes[theme].colors;
}