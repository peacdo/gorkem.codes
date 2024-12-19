'use client';

import { useTheme } from './ThemeProvider';
import { themes, type ThemeName } from '@/lib/theme';
import { Sun, MoonStar, Palette, Coffee } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function ThemeSwitch() {
    const { theme, setTheme } = useTheme();

    const themeOrder: ThemeName[] = ['light', 'dark', 'sepia', 'nord'];

    const themeIcons = {
        light: <Sun size={18} className="text-[var(--primary)]" />,
        dark: <MoonStar size={18} className="text-[var(--primary)]" />,
        sepia: <Coffee size={18} className="text-[var(--primary)]" />,
        nord: <Palette size={18} className="text-[var(--primary)]" />
    };

    const handleThemeChange = () => {
        const currentIndex = themeOrder.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themeOrder.length;
        setTheme(themeOrder[nextIndex]);
    };

    return (
        <button
            onClick={handleThemeChange}
            className="p-2 rounded-md hover:bg-[var(--background-secondary)] transition-colors relative w-9 h-9 flex items-center justify-center"
            aria-label="Change theme"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={theme}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute"
                >
                    {themeIcons[theme]}
                </motion.div>
            </AnimatePresence>
        </button>
    );
}