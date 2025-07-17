import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const QuickAccessGallery = () => {
    const quickAccessItems = [
        {
            image: '/hekimBul.jpg',
            title: 'Aile Hekimliği',
            description: 'Aile hekimliği hizmetleri ve bilgileri',
            url: 'https://turkiye.gov.tr/aile-hekim-bilgisi',
        },
        {
            image: '/ai.jpg',
            title: 'Akılcı İlaç Kullanımı',
            description: 'İlaçların doğru ve güvenli kullanımı',
            url: 'https://www.titck.gov.tr/faaliyetalanlari/ilac/akilci-ilac-kullanimi',
        },
        {
            image: '/mhrs.jpg',
            title: 'MHRS',
            description: 'Merkezi Hekim Randevu Sistemi',
            url: 'https://mhrs.gov.tr/vatandas/#/',
        },
        {
            image: '/kovid19.jpg',
            title: 'COVID-19',
            description: 'COVID-19 bilgilendirme ve aşı randevuları',
            url: 'https://covid19bilgi.saglik.gov.tr/tr/',
        },
    ]

    return (
        <div className="responsive-grid-4">
            {quickAccessItems.map((item, index) => (
                <Link
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-lg card hover:scale-105 transform transition-all duration-300 focus-visible"
                    aria-label={`${item.title} - Yeni sekmede açılır`}
                >
                    <div className="aspect-square relative">
                        <Image
                            src={item.image || '/placeholder.svg'}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 text-center">
                            <ExternalLink className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3" />
                            <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                                {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-200 text-ellipsis-2">
                                {item.description}
                            </p>
                        </div>
                    </div>

                    {/* Bottom info bar - visible on mobile */}
                    <div className="sm:hidden absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2">
                        <h3 className="font-semibold text-sm text-center">
                            {item.title}
                        </h3>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default QuickAccessGallery
