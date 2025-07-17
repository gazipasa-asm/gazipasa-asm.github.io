'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Search } from 'lucide-react'

// const announcements = [
//   {
//     id: 1,
//     title: "COVID-19 Aşı Randevuları",
//     date: "2024-01-15",
//     content:
//       "COVID-19 aşı randevuları için MHRS sistemini kullanabilir veya merkezimizi arayabilirsiniz. Aşı saatleri: Pazartesi-Cuma 09:00-16:00",
//     category: "Aşı",
//   },
//   {
//     id: 2,
//     title: "Grip Aşısı Uygulaması",
//     date: "2024-01-10",
//     content:
//       "Grip sezonu öncesi 65 yaş üstü vatandaşlarımız ve kronik hastalığı bulunanlar için grip aşısı uygulaması başlamıştır.",
//     category: "Aşı",
//   },
//   {
//     id: 3,
//     title: "Sağlıklı Beslenme Semineri",
//     date: "2024-01-05",
//     content:
//       "Diyetisyen uzmanımız tarafından sağlıklı beslenme konulu seminer düzenlenecektir. Tarih: 20 Ocak 2024, Saat: 14:00",
//     category: "Eğitim",
//   },
//   {
//     id: 4,
//     title: "Yeni Laboratuvar Cihazları",
//     date: "2024-01-01",
//     content:
//       "Merkezimize yeni laboratuvar cihazları gelmiştir. Artık daha hızlı ve doğru tahlil sonuçları alabilirsiniz.",
//     category: "Haber",
//   },
// ]
const announcements = []

export default function Announcements() {
    const [searchTerm, setSearchTerm] = useState('')
    const [expandedItems, setExpandedItems] = useState<number[]>([])

    const filteredAnnouncements = []

    const toggleExpanded = (id: number) => {
        setExpandedItems((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        )
    }

    return (
        <div className="p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Duyurular
                </h1>

                {/* Search Bar */}
                <div className="mb-8">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Duyurularda ara..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Announcements List (Kaldırıldı) */}
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">
                        Mevcut güncel duyuru bulunmamaktadır.
                    </p>
                </div>
            </div>
        </div>
    )
}
