import Link from 'next/link';

interface CardProps {
    title: string;
    description: string;
    link?: string;
    className?: string;
}

export function Card({ title, description, link, className = "" }: CardProps) {
    const content = (
        <div className={`p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors ${className}`}>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
    );

    if (link) {
        return (
            <Link href={link} className="block">
                {content}
            </Link>
        );
    }

    return content;
}