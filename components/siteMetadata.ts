import { Metadata } from 'next'

const siteMetadata: Metadata = {
    metadataBase: new URL('https://gazipasaasm.com'),
    title: {
        default: 'Gazipaşa ASM',
        template: '%s | Gazipaşa ASM',
    },
    description:
        "Gazipaşa Aile Sağlığı Merkezi resmi web sitesi. Doktor ve personel kadrosu, çalışma programı, duyurular, galeri ve iletişim bilgileri. Adana Gazipaşa Mahallesi'nde hizmetinizdeyiz.",
    keywords: [
        'Gazipaşa ASM',
        'Aile Sağlığı Merkezi',
        'Adana',
        'Aile Hekimi',
        'Sağlık',
        'Doktor',
        'Randevu',
        'Çalışma Programı',
        'Kadromuz',
        'Duyurular',
        'Aile Hekimliği',
        'ASM',
        'Gazipaşa Mahallesi',
        'Sağlık Merkezi',
        'İletişim',
        'Galeri',
    ],
    applicationName: 'Gazipaşa ASM',
    authors: [
        {
            name: 'Gazipaşa Aile Sağlığı Merkezi',
            url: 'https://gazipasaasm.com',
        },
    ],
    creator: 'Gazipaşa Aile Sağlığı Merkezi',
    publisher: 'Gazipaşa Aile Sağlığı Merkezi',
    alternates: {
        canonical: 'https://gazipasaasm.com',
        languages: {
            'tr-TR': 'https://gazipasaasm.com',
        },
    },
    icons: {
        icon: [
            { url: '/favicon.ico', type: 'image/x-icon' },
            { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
            { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
            { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
            { url: '/favicon-64x64.png', type: 'image/png', sizes: '64x64' },
            {
                url: '/android-chrome-192x192.png',
                type: 'image/png',
                sizes: '192x192',
            },
            {
                url: '/android-chrome-512x512.png',
                type: 'image/png',
                sizes: '512x512',
            },
        ],
        apple: '/apple-touch-icon.png',
        shortcut: '/favicon.ico',
    },
    // twitter: {
    //     card: 'summary_large_image',
    //     title: 'Gazipaşa ASM',
    //     description:
    //         "Gazipaşa Aile Sağlığı Merkezi resmi web sitesi. Doktor ve personel kadrosu, çalışma programı, duyurular, galeri ve iletişim bilgileri. Adana Gazipaşa Mahallesi'nde hizmetinizdeyiz.",
    //     images: ['/og-image.png'],
    //     site: '@gazipasaasm',
    // },
    category: 'healthcare',
    robots: {
        index: true,
        follow: true,
        nocache: false,
    },
    viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
    openGraph: {
        type: 'website',
        url: 'https://gazipasaasm.com',
        title: 'Gazipaşa ASM',
        description:
            "Gazipaşa Aile Sağlığı Merkezi resmi web sitesi. Doktor ve personel kadrosu, çalışma programı, duyurular, galeri ve iletişim bilgileri. Adana Gazipaşa Mahallesi'nde hizmetinizdeyiz.",
        images: [
            {
                url: '/logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Gazipaşa ASM',
            },
        ],
        siteName: 'Gazipaşa ASM',
        locale: 'tr_TR',
    },
}

export default siteMetadata
