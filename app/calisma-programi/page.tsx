import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Çalışma Programı - Gazipaşa ASM',
    description:
        'Gazipaşa Aile Sağlığı Merkezi doktor çalışma programı ve randevu saatleri',
}

export default function Schedule() {
    const schedule = [
        {
            day: 'Pazartesi',
            morning: { doctor: 'Dr.Güldane ÇELEBİ' },
            afternoon: { doctor: 'Dr.Güldane ÇELEBİ' },
        },
        {
            day: 'Salı',
            morning: { doctor: 'Dr.Güldane ÇELEBİ' },
            afternoon: { doctor: 'Dr.Güldane ÇELEBİ' },
        },
        {
            day: 'Çarşamba',
            morning: { doctor: 'Dr.Güldane ÇELEBİ' },
            afternoon: { doctor: 'Dr.Güldane ÇELEBİ' },
        },
        {
            day: 'Perşembe',
            morning: { doctor: 'Dr.Güldane ÇELEBİ' },
            afternoon: { doctor: 'Dr.Güldane ÇELEBİ' },
        },
        {
            day: 'Cuma',
            morning: { doctor: 'Dr.Güldane ÇELEBİ' },
            afternoon: { doctor: 'Dr.Güldane ÇELEBİ' },
        },
    ]

    return (
        <div className="p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Çalışma Programı
                </h1>

                <div className="card overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-blue-600 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold">
                                        Gün
                                    </th>
                                    <th className="px-6 py-4 text-left font-semibold">
                                        Sabah (08:00-12:00)
                                    </th>
                                    <th className="px-6 py-4 text-left font-semibold">
                                        Öğleden Sonra (13:00-17:00)
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {schedule.map((day, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <td className="px-6 py-4 font-medium text-gray-900">
                                            {day.day}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="font-medium text-gray-900">
                                                    {day.morning.doctor}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="font-medium text-gray-900">
                                                    {day.afternoon.doctor}
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-8 card p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
                        Randevu Bilgileri
                    </h2>
                    <div className="space-y-2 text-gray-700">
                        <p>
                            <strong>Telefon:</strong> 0322 454 77 33
                        </p>
                        <p>
                            <strong>MHRS:</strong>{' '}
                            <a
                                href="https://mhrs.gov.tr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                mhrs.gov.tr
                            </a>
                        </p>
                        <p>
                            <strong>Çalışma Saatleri:</strong> Pazartesi - Cuma:
                            08:00 - 17:00
                        </p>
                        <p className="text-sm text-gray-600 mt-4">
                            * Acil durumlar için 112'yi arayınız.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
