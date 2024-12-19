export function Badge({
                          children,
                          className = ""
                      }: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 ${className}`}>
      {children}
    </span>
    );
}