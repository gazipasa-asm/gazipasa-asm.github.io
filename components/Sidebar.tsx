'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'

const Sidebar = () => {
    const [expandedSections, setExpandedSections] = useState<string[]>([
        'links',
        'quick-access',
    ])

    const toggleSection = (section: string) => {
        setExpandedSections((prev) =>
            prev.includes(section)
                ? prev.filter((s) => s !== section)
                : [...prev, section]
        )
    }

    const usefulLinks = [
        { title: 'Sağlık Bakanlığı', url: 'https://www.saglik.gov.tr/' },
        { title: 'E-Nabız', url: 'https://enabiz.gov.tr/' },
        { title: 'MHRS', url: 'https://mhrs.gov.tr/' },
        { title: 'Türkiye.gov.tr', url: 'https://www.turkiye.gov.tr/' },
        { title: 'Alo 184 Sağlık', url: 'tel:184' },
    ]

    const imageLinks = [
        {
            image: '/laboratuvar.jpg',
            title: 'Laboratuvar Sonuçları',
            url: 'https://enabiz.gov.tr/',
            description: 'E-Nabız üzerinden sonuçlarınızı görüntüleyin',
        },
        {
            image: '/eczane.jpg',
            title: 'Nöbetçi Eczane',
            url: 'https://www.eczaciodasi.org.tr/nobetci-eczane',
            description: 'En yakın nöbetçi eczaneyi bulun',
        },
        {
            image: '/alo171.jpg',
            title: 'Alo 171',
            url: 'tel:171',
            description: 'Sağlık danışma hattı',
        },
        {
            image: '/sbnportal.jpg',
            title: 'SBN Portal',
            url: 'https://sbn.gov.tr/',
            description: 'Sağlık Bilgi Sistemi',
        },
    ]

    return (
        <aside className="hidden lg:block sticky right-0 mt-4 mr-2 top-16 lg:top-20 w-80 xl:w-96 h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] bg-white shadow-lg border-l border-gray-200 overflow-y-auto">
            <div className="p-4 xl:p-6 space-y-6">
                {/* Useful Links Section */}
                <div className="bg-gray-50 rounded-lg p-4">
                    <button
                        onClick={() => toggleSection('links')}
                        className="w-full flex items-center justify-between text-left focus-visible"
                        aria-expanded={expandedSections.includes('links')}
                    >
                        <h3 className="heading-3 text-gray-800">
                            Faydalı Bağlantılar
                        </h3>
                        {expandedSections.includes('links') ? (
                            <ChevronUp className="w-5 h-5 text-gray-600" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-gray-600" />
                        )}
                    </button>

                    {expandedSections.includes('links') && (
                        <ul className="mt-4 space-y-2">
                            {usefulLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-2 rounded-md transition-all duration-200 focus-visible group"
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                                        <span className="text-sm font-medium">
                                            {link.title}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Quick Access Section */}
                <div className="bg-gray-50 rounded-lg p-4">
                    <button
                        onClick={() => toggleSection('quick-access')}
                        className="w-full flex items-center justify-between text-left focus-visible"
                        aria-expanded={expandedSections.includes(
                            'quick-access'
                        )}
                    >
                        <h3 className="heading-3 text-gray-800">
                            Hızlı Erişim
                        </h3>
                        {expandedSections.includes('quick-access') ? (
                            <ChevronUp className="w-5 h-5 text-gray-600" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-gray-600" />
                        )}
                    </button>

                    {expandedSections.includes('quick-access') && (
                        <div className="mt-4 space-y-3">
                            {imageLinks.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block group focus-visible"
                                >
                                    <div className="card p-3 group-hover:shadow-md transition-all duration-200 group-hover:scale-[1.02]">
                                        <div className="flex items-start space-x-3">
                                            <div className="relative w-12 h-12 flex-shrink-0">
                                                <Image
                                                    src={
                                                        item.image ||
                                                        '/placeholder.svg'
                                                    }
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover rounded-md"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200 mb-1">
                                                    {item.title}
                                                </p>
                                                <p className="text-xs text-gray-600 text-ellipsis-2">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200 flex-shrink-0 mt-1" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                {/* Emergency Contact */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h3 className="heading-3 text-red-800 mb-3">Acil Durum</h3>
                    <div className="space-y-2">
                        <a
                            href="tel:112"
                            className="flex items-center justify-between p-3 bg-red-100 hover:bg-red-200 rounded-md transition-colors duration-200 focus-visible group"
                        >
                            <div>
                                <p className="font-bold text-red-800">112</p>
                                <p className="text-xs text-red-600">
                                    Acil Servis
                                </p>
                            </div>
                            <div className="text-red-600 group-hover:scale-110 transition-transform duration-200">
                                📞
                            </div>
                        </a>
                        <a
                            href="tel:03224547733"
                            className="flex items-center justify-between p-3 bg-blue-100 hover:bg-blue-200 rounded-md transition-colors duration-200 focus-visible group"
                        >
                            <div>
                                <p className="font-bold text-blue-800">
                                    0322 454 77 33
                                </p>
                                <p className="text-xs text-blue-600">
                                    Randevu Hattı
                                </p>
                            </div>
                            <div className="text-blue-600 group-hover:scale-110 transition-transform duration-200">
                                📞
                            </div>
                        </a>
                    </div>
                </div>

                {/* Working Hours */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="heading-3 text-green-800 mb-3">
                        Çalışma Saatleri
                    </h3>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-green-700">
                                Pazartesi - Cuma
                            </span>
                            <span className="font-medium text-green-800">
                                08:00 - 17:00
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-green-700">
                                Cumartesi - Pazar
                            </span>
                            <span className="font-medium text-red-600">
                                Kapalı
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
