'use client'
import { useState, useCallback, useEffect } from 'react'

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

    // Modal için state
    const [modalOpen, setModalOpen] = useState(false)

    // ESC tuşu ile kapama
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            setModalOpen(false)
        }
    }, [])

    useEffect(() => {
        if (modalOpen) {
            window.addEventListener('keydown', handleKeyDown)
        } else {
            window.removeEventListener('keydown', handleKeyDown)
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [modalOpen, handleKeyDown])

    return (
        <div className="p-6">
            <div className="max-w-4xl mx-auto">
                {/* Çalışma saatleri görseli */}
                <div className="card mt-4 overflow-hidden">
                    <div className="w-full flex justify-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                            Çalışma Programımız
                        </h2>
                    </div>
                    <img
                        src="/calismasaatleri.jpg"
                        alt="Çalışma Saatleri Görseli"
                        className="w-full h-auto rounded-lg object-cover cursor-pointer"
                        onClick={() => setModalOpen(true)}
                    />
                </div>

                {/* Modal */}
                {modalOpen && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                        onClick={() => setModalOpen(false)}
                    >
                        <div
                            className="max-w-3xl w-full p-4 flex justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src="/calismasaatleri.jpg"
                                alt="Çalışma Saatleri Büyük Görsel"
                                className="rounded-lg max-h-[80vh] w-auto h-auto shadow-2xl border-4 border-white"
                            />
                        </div>
                    </div>
                )}

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
