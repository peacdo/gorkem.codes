export function Section({
                            heading,
                            children,
                            className = "",
                        }: {
    heading?: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section className={`py-8 ${className}`}>
            {heading && (
                <h2 className="text-2xl font-bold mb-6">{heading}</h2>
            )}
            {children}
        </section>
    );
}
