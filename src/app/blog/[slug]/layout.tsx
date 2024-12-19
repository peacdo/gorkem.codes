import TableOfContents from '@/components/TableOfContents';

export default function BlogLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative lg:grid lg:grid-cols-[1fr_250px] lg:gap-8">
            <main>{children}</main>
            <aside className="hidden lg:block">
                <TableOfContents />
            </aside>
        </div>
    );
}