'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
            <p className="text-[var(--secondary)] mb-6">
                We couldn&#39;t load this blog post. Please try again later.
            </p>
            <div className="flex gap-4">
                <button
                    onClick={reset}
                    className="px-4 py-2 bg-[var(--link-color)] text-white rounded hover:opacity-90"
                >
                    Try again
                </button>
                <Link
                    href="/blog"
                    className="px-4 py-2 border border-[var(--border-color)] rounded hover:bg-[var(--code-background)]"
                >
                    Back to blog
                </Link>
            </div>
        </div>
    );
}