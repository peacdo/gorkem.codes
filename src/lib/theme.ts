// src/lib/theme.ts
export const themes = {
    light: {
        name: 'Light',
        colors: {
            primary: '#18181b',
            secondary: '#71717a',
            background: '#ffffff',
            'background-secondary': '#f4f4f5',
            'font-color': '#18181b',
            'link-color': '#2563eb',
            'link-hover': '#1d4ed8',
            'border-color': '#e4e4e7',
            'code-background': '#f4f4f5',
            'inline-code-background': '#f4f4f5',
            'blockquote-background': '#f4f4f5',
        }
    },
    dark: {
        name: 'Dark',
        colors: {
            primary: '#f4f4f5',
            secondary: '#a1a1aa',
            background: '#18181b',
            'background-secondary': '#27272a',
            'font-color': '#f4f4f5',
            'link-color': '#93c5fd',
            'link-hover': '#60a5fa',
            'border-color': '#3f3f46',
            'code-background': '#27272a',
            'inline-code-background': '#27272a',
            'blockquote-background': '#27272a',
        }
    },
    sepia: {
        name: 'Sepia',
        colors: {
            primary: '#422006',
            secondary: '#854d0e',
            background: '#fef3c7',
            'background-secondary': '#fde68a',
            'font-color': '#422006',
            'link-color': '#9a3412',
            'link-hover': '#c2410c',
            'border-color': '#f59e0b',
            'code-background': '#fde68a',
            'inline-code-background': '#fde68a',
            'blockquote-background': '#fde68a',
        }
    },
    nord: {
        name: 'Nord',
        colors: {
            primary: '#2e3440',
            secondary: '#4c566a',
            background: '#eceff4',
            'background-secondary': '#e5e9f0',
            'font-color': '#2e3440',
            'link-color': '#5e81ac',
            'link-hover': '#81a1c1',
            'border-color': '#d8dee9',
            'code-background': '#e5e9f0',
            'inline-code-background': '#e5e9f0',
            'blockquote-background': '#e5e9f0',
        }
    }
} as const;