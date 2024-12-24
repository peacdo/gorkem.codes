export default function CertificationLayout({
                                                children,
                                            }: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background">
            <main className="container py-12">
                {children}
            </main>
        </div>
    );
}