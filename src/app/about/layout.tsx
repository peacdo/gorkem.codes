import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
    description: 'A student wants to learn a bit of anything.',
};

export default function AboutLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    return children;
}