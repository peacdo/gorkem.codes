// src/components/ThemeSwitch.tsx
'use client';

import { useTheme } from './ThemeProvider';
import { Sun, MoonStar } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function ThemeSwitch() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-secondary transition-colors relative w-9 h-9 flex items-center justify-center"
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={theme}
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                        rotate: theme === 'light' ? -90 : 90
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.5,
                        rotate: theme === 'light' ? 90 : -90
                    }}
                    transition={{
                        duration: 0.35,
                        ease: [0.23, 1, 0.32, 1], // Custom easing for smooth morphing
                        opacity: { duration: 0.2 } // Slightly faster opacity transition
                    }}
                    className="absolute"
                >
                    {theme === 'light' ? (
                        <Sun
                            size={18}
                            className="stroke-current"
                        />
                    ) : (
                        <MoonStar
                            size={18}
                            className="stroke-current"
                        />
                    )}
                </motion.div>
            </AnimatePresence>
        </button>
    );
}