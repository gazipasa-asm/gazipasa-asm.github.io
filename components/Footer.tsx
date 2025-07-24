import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { href: '/', label: 'Ana Sayfa' },
        { href: '/hakkimizda', label: 'Hakkımızda' },
        { href: '/kadromuz', label: 'Kadromuz' },
        { href: '/calisma-programi', label: 'Çalışma Programı' },
        { href: '/iletisim', label: 'İletişim' },
    ]

    const externalLinks = [
        { href: 'https://www.saglik.gov.tr/', label: 'Sağlık Bakanlığı' },
        { href: 'https://mhrs.gov.tr/', label: 'MHRS' },
        { href: 'https://enabiz.gov.tr/', label: 'E-Nabız' },
        { href: 'https://www.turkiye.gov.tr/', label: 'Türkiye.gov.tr' },
    ]

    return (
        <footer className="bg-gray-800 text-white mt-8 sm:mt-12 lg:mt-16">
            <div className="responsive-container section-padding">
                <div className="responsive-grid-3 mb-8 sm:mb-12">
                    {/* Contact Info */}
                    <div className="space-y-4 sm:space-y-6">
                        <h3 className="heading-3 text-white mb-4">
                            İletişim Bilgileri
                        </h3>
                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-start space-x-3">
                                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-medium">Randevu Hattı</p>
                                    <a
                                        href="tel:03224547733"
                                        className="text-blue-300 hover:text-blue-200 focus-visible transition-colors duration-200"
                                    >
                                        0322 454 77 33
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Phone className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-medium">Acil Durum</p>
                                    <a
                                        href="tel:112"
                                        className="text-red-300 hover:text-red-200 focus-visible transition-colors duration-200"
                                    >
                                        112
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-medium">E-posta</p>
                                    <a
                                        href="mailto:info@gazipasaasm.gov.tr"
                                        className="text-blue-300 hover:text-blue-200 focus-visible transition-colors duration-200 break-all"
                                    >
                                        info@gazipasaasm.gov.tr
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-medium">Adres</p>
                                    <address className="text-gray-300 not-italic">
                                        Gazipaşa Mahallesi, Aile Sağlığı Merkezi
                                        <br />
                                        01140 Seyhan/ADANA
                                    </address>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-medium">
                                        Çalışma Saatleri
                                    </p>
                                    <p className="text-gray-300">
                                        Pazartesi - Cuma: 08:00 - 17:00
                                        <br />
                                        Cumartesi - Pazar: Kapalı
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4 sm:space-y-6">
                        <h3 className="heading-3 text-white mb-4">
                            Hızlı Bağlantılar
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-blue-300 transition-colors duration-200 focus-visible block py-1"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* External Links */}
                    <div className="space-y-4 sm:space-y-6">
                        <h3 className="heading-3 text-white mb-4">
                            Faydalı Bağlantılar
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {externalLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 hover:text-blue-300 transition-colors duration-200 focus-visible flex items-center py-1 group"
                                    >
                                        <span>{link.label}</span>
                                        <ExternalLink className="w-3 h-3 ml-1 opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 pt-6 sm:pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        <div className="text-center sm:text-left">
                            <p className="text-gray-400 text-sm">
                                © {currentYear} Gazipaşa Aile Sağlığı Merkezi.
                                Tüm hakları saklıdır.
                            </p>
                            <p className="text-gray-500 text-xs mt-1">
                                T.C. Sağlık Bakanlığı'na bağlı resmi sağlık
                                kuruluşudur.
                            </p>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <Link
                                href="/gizlilik"
                                className="hover:text-gray-300 focus-visible transition-colors duration-200"
                            >
                                Gizlilik Politikası
                            </Link>
                            <span>•</span>
                            <Link
                                href="/kullanim-kosullari"
                                className="hover:text-gray-300 focus-visible transition-colors duration-200"
                            >
                                Kullanım Koşulları
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
