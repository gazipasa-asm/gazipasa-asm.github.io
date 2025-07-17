import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import siteMetadata from '@/components/siteMetadata'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

export const metadata: Metadata = siteMetadata

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="tr" className={inter.variable}>
            <head>
                <meta name="theme-color" content="#2563eb" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="default"
                />
            </head>
            <body className={`${inter.className} antialiased`}>
                <div className="min-h-screen flex flex-col">
                    <Navigation />

                    <div className="flex-1 flex flex-col lg:flex-row">
                        {/* Main Content */}
                        <main className="flex-1 w-full">
                            <div className="container-fluid">{children}</div>
                        </main>

                        {/* Sidebar - Hidden on mobile/tablet, visible on desktop */}
                        <Sidebar />
                    </div>

                    <Footer />
                </div>
            </body>
        </html>
    )
}
