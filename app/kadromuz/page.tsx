import Image from 'next/image'
import type { Metadata } from 'next'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const metadata: Metadata = {
    title: 'Kadromuz - Gazipaşa ASM',
    description: 'Gazipaşa Aile Sağlığı Merkezi doktor ve personel kadrosu',
}

export default function Team() {
    const doctors = [
        {
            name: 'Dr. Levent FETULLAHOĞLU',
            title: 'Aile Hekimi',
            specialization: 'Aile Hekimliği',
            image: '',
        },
        {
            name: 'Dr. Güldane ÇELEBİ',
            title: 'Aile Hekimi',
            specialization: 'Aile Hekimliği',
            image: '',
        },
    ]

    const staff = [
        {
            name: 'Latife TARHAN',
            title: 'Hemşire',
            specialization: 'Sağlık Hizmetleri',
            image: '',
        },
        {
            name: 'Bahar TOZKOPARAN',
            title: 'Ebe Hemşire',
            specialization: 'Sağlık Hizmetleri',
            image: '',
        },
        {
            name: 'Fatma Büşra YAKIŞIR',
            title: 'Hemşire',
            specialization: 'Sağlık Hizmetleri',
            image: '',
        },
    ]

    const PersonCard = ({
        person,
        showRoom = false,
    }: {
        person: any
        showRoom?: boolean
    }) => {
        let name = ''
        let surname = ''

        try {
            if (person.name) {
                const splittedName = person.name.split(' ')
                name = splittedName[splittedName.length - 2]
                surname = splittedName[splittedName.length - 1]
            }
        } catch (error) {
            name = person.name
            surname = ''
        }

        return (
            <div className="card p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-32 h-32 mx-auto mb-4">
                    <Avatar className="w-32 h-32">
                        <AvatarImage
                            src={person.image || ''}
                            className="object-cover rounded-full"
                        />
                        <AvatarFallback className="text-2xl">
                            {name && name.charAt(0)}
                            {surname && surname.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {person.name}
                </h3>
                <p className="text-blue-600 font-medium mb-1">{person.title}</p>
                <p className="text-gray-600 mb-2">{person.specialization}</p>
                {showRoom && person.room && (
                    <p className="text-sm text-gray-500">{person.room}</p>
                )}
            </div>
        )
    }

    return (
        <div className="p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Kadromuz
                </h1>

                {/* Doctors Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
                        Doktorlarımız
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {doctors.map((doctor, index) => (
                            <div key={index} className="w-full max-w-sm">
                                <PersonCard person={doctor} showRoom={true} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Staff Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
                        Personelimiz
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {staff.map((member, index) => (
                            <div key={index} className="w-full max-w-sm">
                                <PersonCard person={member} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Info */}
                <div className="mt-12 card p-8 text-center">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                        Randevu ve Bilgi
                    </h3>
                    <p className="text-gray-700 mb-2">
                        <strong>Telefon:</strong> 0322 454 77 33
                    </p>
                    <p className="text-gray-700">
                        <strong>Çalışma Saatleri:</strong> Pazartesi - Cuma:
                        08:00 - 17:00
                    </p>
                </div>
            </div>
        </div>
    )
}
