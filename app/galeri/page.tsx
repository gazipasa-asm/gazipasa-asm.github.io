'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

const galleryImages = [
    { src: '/galeri-1.jpg', title: '' },
    { src: '/galeri-2.jpg', title: '' },
    { src: '/galeri-3.jpg', title: '' },
    { src: '/galeri-4.jpg', title: '' },
    { src: '/galeri-5.jpg', title: '' },
    { src: '/galeri-6.jpg', title: '' },
    { src: '/galeri-7.jpg', title: '' },
    { src: '/galeri-8.jpg', title: '' },
    { src: '/galeri-9.jpg', title: '' },
]

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null)

    const openModal = (index: number) => {
        setSelectedImage(index)
    }

    const closeModal = () => {
        setSelectedImage(null)
    }

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % galleryImages.length)
        }
    }

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage(
                (selectedImage - 1 + galleryImages.length) %
                    galleryImages.length
            )
        }
    }

    useEffect(() => {
        if (selectedImage === null) return
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') {
                nextImage()
            } else if (e.key === 'ArrowLeft') {
                prevImage()
            } else if (e.key === 'Escape') {
                closeModal()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedImage])

    return (
        <div className="p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Galeri
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="card overflow-hidden cursor-pointer group"
                            onClick={() => openModal(index)}
                        >
                            <div className="aspect-video relative">
                                <Image
                                    src={image.src || '/placeholder.svg'}
                                    alt={
                                        image.title ||
                                        `Galeri görseli ${index + 1}`
                                    }
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedImage !== null && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                        onClick={closeModal}
                    >
                        <div
                            className="relative max-w-4xl max-h-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                                aria-label="Kapat"
                            >
                                <X className="w-8 h-8" />
                            </button>

                            <div className="relative">
                                <Image
                                    src={
                                        galleryImages[selectedImage].src ||
                                        '/placeholder.svg'
                                    }
                                    alt={
                                        galleryImages[selectedImage].title ||
                                        `Galeri görseli ${selectedImage + 1}`
                                    }
                                    width={800}
                                    height={600}
                                    className="max-w-full max-h-[80vh] object-contain"
                                />

                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 text-2xl"
                                    aria-label="Önceki resim"
                                >
                                    ‹
                                </button>

                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 text-2xl"
                                    aria-label="Sonraki resim"
                                >
                                    ›
                                </button>
                            </div>

                            {/* Alt yazı/metin kaldırıldı */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
