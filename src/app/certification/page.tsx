import { Metadata } from 'next';
import { Badge } from '@/components/ui/Badge';
import { Section } from '@/components/ui/Section';
import { Calendar } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Anbean Finans ve Yatırım Okulu',
    description: 'A comprehensive finance and investment program featuring industry leaders from major financial institutions',
};

interface Session {
    date: string;
    title: string;
    speaker: string;
    role: string;
    company: string;
}

const sessions: Session[] = [
    {
        date: "29.02.2024",
        title: "Türkiye M&A Piyasası",
        speaker: "İbrahim Romano",
        role: "Yönetici Direktörü",
        company: "Ünlü & Co",
    },
    {
        date: "07.03.2024",
        title: "Global Piyasalar",
        speaker: "Ömer Şirin",
        role: "Global Piyasalar Satış Birim Sorumlusu",
        company: "Garanti BBVA",
    },
    {
        date: "12.03.2024",
        title: "Yatırım 101: Doğru Yatırım Kararı Alabilme",
        speaker: "Kutay Gözgör",
        role: "Araştırma Müdürü",
        company: "Burgan Yatırım",
    },
    {
        date: "14.03.2024",
        title: "Dijital Bankacılık",
        speaker: "Itır Ürünay Aydoğan",
        role: "Ekosistem Bankacılığı ve İnovasyon Direktörü",
        company: "Burgan Yatırım",
    },
    {
        date: "21.03.2024",
        title: "Dijital Cüzdan ve Görünmez Finans Oturumu",
        speaker: "Seda Küçükfırat Arslan & Erender Çekim",
        role: "",
        company: "United Payment",
    },
    {
        date: "26.03.2024",
        title: "Algo Trade 101",
        speaker: "Emre Pabuçcu",
        role: "Hazine Analitik ve Algo Modelleme Danışmanı",
        company: "Odeabank",
    },
    {
        date: "28.03.2024",
        title: "Dünya ve Türkiye Ekonomisinin Geleceği",
        speaker: "Prof. Dr. Emre Alkin",
        role: "Ekonomist ve Yazar",
        company: "İstanbul Topkapı Üniversitesi Rektörü",
    },
    {
        date: "02.04.2024",
        title: "Finans Dünyasında AI ve Machine Learning Kullanımı",
        speaker: "Gülcan Gökçeoğlı",
        role: "ARF Yapay Zeka ve Veri Bilimi Kıdemli Proje Lideri",
        company: "TEB",
    },
    {
        date: "04.04.2024",
        title: "Sürdürülebilir Finans",
        speaker: "Yeliz Ataay Arıkök",
        role: "Hazine Satış ve Uluslararası Bankacılık Direktörü",
        company: "QNB Finansbank",
    },
    {
        date: "18.04.2024",
        title: "İlham Oturumu",
        speaker: "Sinan Güler",
        role: "Sosyal Girişimci, Eski Milli Basketbolcu",
        company: "",
    },
    {
        date: "25.04.2024",
        title: "Finansal Analiz",
        speaker: "Sevilay Kıran",
        role: "Finansal Analiz Departman Müdürü",
        company: "TSKB",
    },
    {
        date: "02.05.2024",
        title: "Bankacılıkta Uzaktan (Online) Müşteri Edinimi Süreçleri",
        speaker: "Mehmet Bütün",
        role: "Bilgi Teknolojileri ve Dijital Bankacılık Direktörü",
        company: "Vakıf Katılım",
    },
    {
        date: "09.05.2024",
        title: "Kredi Analitiği Eğitimi",
        speaker: "İhsan İlker Pirinç",
        role: "Kredi Analitiği ve Karar Sistemleri Destek Yöneticisi",
        company: "Türkiye İş Bankası",
    },
    {
        date: "16.05.2024",
        title: "Bilgi Çağında Büyük Verinin Gücü",
        speaker: "Talha Kılıç",
        role: "Lead Data Solution Architect",
        company: "Fibabanka",
    },
    {
        date: "23.05.2024",
        title: "Lider Buluşması: Finans Kariyer Yolumu Nasıl Çizerim?",
        speaker: "Tankut Çığır",
        role: "HR Strategy & Deniz Academy SVP",
        company: "Denizbank",
    },
    {
        date: "28.05.2024",
        title: "Özel Oturum: Blockchain/Web3.0’ın Geleceği",
        speaker: "Efe Bulduk",
        role: "Ekonomist",
        company: "FirstBatch",
    },
    {
        date: "30.05.2024",
        title: "Finansal Okuryazarlık",
        speaker: "Akbank",
        role: "Akbank",
        company: "",
    }
];

export default function CertificationPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <header className="mb-12">
                <h1 className="text-4xl font-bold mb-4">Anbean Finans ve Yatırım Okulu</h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-5 h-5" />
                    <span>Şubat - Mayıs 2024</span>
                </div>
                <p className="mt-4 text-lg text-muted-foreground">
                    An extensive finance and investment program featuring industry leaders from Turkey's top financial institutions
                </p>
            </header>

            <Section heading="Program Overview">
                <div className="prose dark:prose-invert">
                    <p>
                        The Anbean Finans ve Yatırım Okulu is a comprehensive program that covers various aspects
                        of finance and investment, delivered by leading professionals from Turkey's major financial
                        institutions. The program spans from February to May 2024, featuring sessions on M&A,
                        global markets, digital banking, AI in finance, and more.
                    </p>
                </div>
            </Section>

            <Section heading="Program Schedule">
                <div className="space-y-6">
                    {sessions.map((session) => (
                        <div
                            key={`${session.date}-${session.title}`}
                            className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row justify-between gap-4 mb-3">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{session.title}</h3>
                                    <p className="text-primary">
                                        {session.speaker} · {session.role}
                                    </p>
                                    <p className="text-muted-foreground">{session.company}</p>
                                </div>
                                <div className="flex flex-col items-start md:items-end gap-2">
                                    <Badge className="text-xs">{session.date}</Badge>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section heading="Key Topics Covered">
                <div className="grid gap-4 md:grid-cols-2">
                    {[
                        'M&A Markets in Turkey',
                        'Global Markets',
                        'Investment Fundamentals',
                        'Digital Banking',
                        'AI and Machine Learning in Finance',
                        'Sustainable Finance',
                        'Financial Analysis',
                        'Digital Wallets',
                        'Algorithmic Trading',
                        'Blockchain/Web3.0'
                    ].map((topic) => (
                        <div
                            key={topic}
                            className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
                        >
                            {topic}
                        </div>
                    ))}
                </div>
            </Section>

            <Section heading="Participating Institutions">
                <div className="grid gap-4 md:grid-cols-3">
                    {[
                        'Ünlü & Co',
                        'Garanti BBVA',
                        'Burgan Yatırım',
                        'Yapı Kredi',
                        'United Payment',
                        'Odeabank',
                        'TEB',
                        'QNB Finansbank',
                        'TSKB',
                        'Vakıf Katılım',
                        'Türkiye İş Bankası',
                        'Fibabanka',
                        'Denizbank',
                        'Akbank'
                    ].map((institution) => (
                        <div
                            key={institution}
                            className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors text-center"
                        >
                            {institution}
                        </div>
                    ))}
                </div>
            </Section>

            <Section heading="Program Benefits">
                <div className="prose dark:prose-invert">
                    <ul>
                        <li>Direct learning from industry leaders and experts</li>
                        <li>Comprehensive coverage of modern finance and investment topics</li>
                        <li>Insights into digital transformation in banking</li>
                        <li>Understanding of emerging technologies in finance</li>
                        <li>Networking opportunities with financial institutions</li>
                    </ul>
                </div>
            </Section>
        </div>
    );
}