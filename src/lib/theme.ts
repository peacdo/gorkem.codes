// src/lib/theme.ts
export const themes = {
    light: {
        name: 'Light',
        colors: {
            primary: 'hsl(var(--primary))',
            secondary: 'hsl(var(--secondary))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            muted: 'hsl(var(--muted))',
            'muted-foreground': 'hsl(var(--muted-foreground))',
            accent: 'hsl(var(--accent))',
            'accent-foreground': 'hsl(var(--accent-foreground))',
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            'link-color': 'hsl(var(--link-color))',
            'link-hover': 'hsl(var(--link-hover))',
            'code-background': 'hsl(var(--code-background))',
        }
    },
    dark: {
        name: 'Dark',
        colors: {
            primary: 'hsl(var(--primary))',
            secondary: 'hsl(var(--secondary))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            muted: 'hsl(var(--muted))',
            'muted-foreground': 'hsl(var(--muted-foreground))',
            accent: 'hsl(var(--accent))',
            'accent-foreground': 'hsl(var(--accent-foreground))',
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            'link-color': 'hsl(var(--link-color))',
            'link-hover': 'hsl(var(--link-hover))',
            'code-background': 'hsl(var(--code-background))',
        }
    }
} as const;

export type Theme = keyof typeof themes;
export type ThemeColors = typeof themes.light.colors;