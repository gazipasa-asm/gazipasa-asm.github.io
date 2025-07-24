'use client'

import type React from 'react'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault()

    //     const subject = encodeURIComponent('İletişim Formu Mesajı')
    //     const body = encodeURIComponent(
    //         `Ad Soyad: ${formData.name}\nE-posta: ${formData.email}\nMesaj:\n${formData.message}`
    //     )
    //     const mailtoLink = `mailto:info@gazipasaasm.gov.tr?subject=${subject}&body=${body}`

    //     window.open(mailtoLink)
    //     setFormData({ name: '', email: '', message: '' })
    // }

    return (
        <div className="p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    İletişim
                </h1>

                <div className="grid grid-cols-1 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="card p-6">
                            <h2 className="text-xl font-semibold mb-6 text-gray-800">
                                İletişim Bilgileri
                            </h2>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Phone className="w-5 h-5 text-blue-600" />
                                    <div>
                                        <p className="font-medium text-gray-800">
                                            Telefon
                                        </p>
                                        <p className="text-gray-600">
                                            0322 454 77 33
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Mail className="w-5 h-5 text-blue-600" />
                                    <div>
                                        <p className="font-medium text-gray-800">
                                            E-posta
                                        </p>
                                        <p className="text-gray-600">
                                            info@gazipasaasm.gov.tr
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <MapPin className="w-5 h-5 text-blue-600" />
                                    <div>
                                        <p className="font-medium text-gray-800">
                                            Adres
                                        </p>
                                        <p className="text-gray-600">
                                            Gazipaşa Mahallesi, Aile Sağlığı
                                            Merkezi
                                            <br />
                                            01140 Seyhan/ADANA
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Clock className="w-5 h-5 text-blue-600" />
                                    <div>
                                        <p className="font-medium text-gray-800">
                                            Çalışma Saatleri
                                        </p>
                                        <p className="text-gray-600">
                                            Pazartesi - Cuma: 08:00 - 17:00
                                            <br />
                                            Cumartesi - Pazar: Kapalı
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="card overflow-hidden">
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d796.5223359861006!2d35.320538869632536!3d37.007664869207844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f3c263eaaab%3A0x5471efef2a316ed6!2zVC5DLiBTYcSfbMSxayBCYWthbmzEscSfxLEgQURBTkEgR0FaxLBQQcWeQSBBxLBMRSBTQcSeTEnEnkkgTUVSS0VaxLA!5e0!3m2!1str!2str!4v1752769915711!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d796.5223359861006!2d35.320538869632536!3d37.007664869207844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f3c263eaaab%3A0x5471efef2a316ed6!2zVC5DLiBTYcSfbMSxayBCYWthbmzEscSfxLEgQURBTkEgR0FaxLBQQcWeQSBBxLBMRSBTQcSeTEnEnkkgTUVSS0VaxLA!5e0!3m2!1str!2str!4v1752769915711!5m2!1str!2str"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Gazipaşa ASM Konum"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    {/* <div className="card p-6">
                        <h2 className="text-xl font-semibold mb-6 text-gray-800">
                            Bize Ulaşın
                        </h2>

                        <form
                            action="mailto:info@gazipasaasm.gov.tr"
                            className="space-y-6"
                            method="POST"
                            encType="multipart/form-data"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Ad Soyad *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    E-posta *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Mesaj *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting
                                    ? 'Gönderiliyor...'
                                    : 'Mesaj Gönder'}
                            </button>

                            {submitMessage && (
                                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                                    {submitMessage}
                                </div>
                            )}
                        </form>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
