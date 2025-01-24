// src/app/layout.tsx
import React from 'react';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import MainLayout from '@/components/MainLayout';
import Navigation from '@/components/Navigation';
import './globals.css';

export const metadata: Metadata = {
    title: 'Görkem Özyılmaz - Student',
    description: 'Software developer student, learning through building projects.',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider>
                    <Navigation />
                    <MainLayout>
                        {children}
                    </MainLayout>
                </ThemeProvider>
            </body>
        </html>
    );
}