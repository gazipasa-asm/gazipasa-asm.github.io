'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

const HeroSlider = () => {
    const slides = [
        {
            src: '/1.png',
            alt: 'Sağlık Hizmetleri',
            title: 'Kaliteli Sağlık Hizmeti',
        },
        {
            src: '/2.jpg',
            alt: '',
            title: '',
        },
        {
            src: '/3.jpg',
            alt: '',
            title: '',
        },
        {
            src: '/4.jpg',
            alt: '112',
            title: '112',
        },
    ]

    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [isLoaded, setIsLoaded] = useState(false)

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, [slides.length])

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }, [slides.length])

    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(index)
    }, [])

    // Auto-play functionality
    useEffect(() => {
        if (!isPlaying) return

        const timer = setInterval(nextSlide, 5000)
        return () => clearInterval(timer)
    }, [isPlaying, nextSlide])

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                prevSlide()
            } else if (event.key === 'ArrowRight') {
                nextSlide()
            } else if (event.key === ' ') {
                event.preventDefault()
                setIsPlaying(!isPlaying)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [nextSlide, prevSlide, isPlaying])

    // Preload images
    useEffect(() => {
        const imagePromises = slides.map((slide) => {
            return new Promise((resolve, reject) => {
                const img = new window.Image()
                img.onload = resolve
                img.onerror = reject
                img.src = slide.src
            })
        })

        Promise.all(imagePromises)
            .then(() => setIsLoaded(true))
            .catch(() => setIsLoaded(true)) // Still show even if some images fail
    }, [slides])

    if (!isLoaded) {
        return (
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] bg-gray-200 rounded-lg animate-pulse">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-gray-500">Yükleniyor...</div>
                </div>
            </div>
        )
    }

    return (
        <div
            className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden rounded-lg group"
            role="region"
            aria-label="Resim galerisi"
        >
            {/* Slides */}
            <div className="relative h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                        aria-hidden={index !== currentSlide}
                    >
                        <div
                            className={`w-full h-full relative ${
                                slide.title === '112'
                                    ? 'flex items-center justify-center p-12 sm:p-20'
                                    : ''
                            }`}
                        >
                            <Image
                                src={slide.src || '/placeholder.svg'}
                                alt={slide.alt}
                                fill
                                className={
                                    slide.title === '112'
                                        ? 'object-contain bg-white'
                                        : 'object-cover'
                                }
                                priority={index === 0}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                            />
                        </div>
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                        {/* Slide title */}
                        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                            <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-lg">
                                {slide.title}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 sm:p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus-visible"
                aria-label="Önceki slayt"
            >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 sm:p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus-visible"
                aria-label="Sonraki slayt"
            >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>

            {/* Play/Pause Button */}
            <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/50 hover:bg-black/75 text-white p-2 sm:p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus-visible"
                aria-label={
                    isPlaying
                        ? 'Otomatik geçişi durdur'
                        : 'Otomatik geçişi başlat'
                }
            >
                {isPlaying ? (
                    <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                    <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 focus-visible ${
                            index === currentSlide
                                ? 'bg-white scale-125'
                                : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Slayt ${index + 1}'e git`}
                        aria-current={index === currentSlide ? 'true' : 'false'}
                    />
                ))}
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
                <div
                    className="h-full bg-white transition-all duration-100 ease-linear"
                    style={{
                        width: isPlaying
                            ? `${((currentSlide + 1) / slides.length) * 100}%`
                            : '0%',
                    }}
                />
            </div>
        </div>
    )
}

export default HeroSlider
