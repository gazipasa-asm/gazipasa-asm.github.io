'use client'

import type React from 'react'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const mobileMenuRef = useRef<HTMLDivElement>(null)
    const pathname = usePathname()

    const navItems = [
        { href: '/', label: 'Ana Sayfa' },
        { href: '/hakkimizda', label: 'Hakkımızda' },
        { href: '/kadromuz', label: 'Kadromuz' },
        { href: '/calisma-programi', label: 'Çalışma Programı' },
        { href: '/galeri', label: 'Galeri' },
        { href: '/duyurular', label: 'Duyurular' },
        { href: '/iletisim', label: 'İletişim' },
    ]

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    // Handle keyboard navigation
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Escape') {
            setIsOpen(false)
        }
    }

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white/95 backdrop-blur-sm shadow-lg'
                        : 'bg-white shadow-md'
                }`}
                role="navigation"
                aria-label="Ana navigasyon"
            >
                <div className="max-w-screen-xl mx-auto px-2 sm:px-4">
                    <div className="flex justify-between items-center h-16 lg:h-20">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-2 sm:gap-3 focus-visible flex-shrink-0 min-w-0"
                            aria-label="Gazipaşa ASM Ana Sayfa"
                        >
                            <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0">
                                <Image
                                    src="/logo.jpg"
                                    alt="Gazipaşa ASM Logo"
                                    fill
                                    className="rounded-full object-cover"
                                    priority
                                    sizes="(max-width: 640px) 2.5rem, (max-width: 1024px) 3rem, 3.5rem"
                                />
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="text-base sm:text-lg lg:text-xl font-bold text-blue-600 leading-tight truncate">
                                    Gazipaşa ASM
                                </span>
                                <span className="text-xs sm:text-sm text-gray-600 leading-tight hidden sm:block truncate">
                                    Aile Sağlığı Merkezi
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center flex-1 justify-center min-w-0">
                            <div className="flex flex-wrap items-center gap-x-1 gap-y-1 xl:gap-x-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`nav-link whitespace-nowrap px-2 py-1 rounded-md transition-colors duration-200 ${
                                            pathname === item.href
                                                ? 'text-blue-600 bg-blue-50 font-semibold'
                                                : 'hover:bg-gray-100 text-gray-700'
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Emergency Contact - Desktop */}
                        <div className="hidden xl:flex items-center space-x-4 flex-shrink-0">
                            <div className="text-right">
                                <p className="text-xs text-gray-600">
                                    Acil Durum
                                </p>
                                <a
                                    href="tel:112"
                                    className="text-sm font-bold text-red-600 hover:text-red-700 focus-visible"
                                >
                                    112
                                </a>
                            </div>
                            {/* Ayırıcı çubuk */}
                            <div className="h-8 w-px bg-gradient-to-b from-gray-400 via-gray-700 to-black mx-2" />
                            <div className="text-right">
                                <p className="text-xs text-gray-600">Randevu</p>
                                <a
                                    href="tel:03224547733"
                                    className="text-sm font-bold text-blue-600 hover:text-blue-700 focus-visible"
                                >
                                    0322 454 77 33
                                </a>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            onKeyDown={handleKeyDown}
                            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus-visible transition-colors duration-200"
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            aria-label={isOpen ? 'Menüyü kapat' : 'Menüyü aç'}
                        >
                            {isOpen ? (
                                <X
                                    className="block h-7 w-7"
                                    aria-hidden="true"
                                />
                            ) : (
                                <Menu
                                    className="block h-7 w-7"
                                    aria-hidden="true"
                                />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Overlay */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
                        aria-hidden="true"
                        onClick={() => setIsOpen(false)}
                    />
                )}

                {/* Mobile Navigation Menu */}
                <div
                    ref={mobileMenuRef}
                    id="mobile-menu"
                    className={`lg:hidden fixed top-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
                        isOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
                    style={{
                        maxHeight: '100vh',
                        marginTop: '0',
                        paddingTop: '4rem',
                    }}
                >
                    <div
                        className="overflow-y-auto"
                        style={{ maxHeight: 'calc(100vh - 4rem)' }}
                    >
                        <div className="px-4 py-2 space-y-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`mobile-nav-link block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
                                        pathname === item.href
                                            ? 'text-blue-600 bg-blue-50 font-semibold'
                                            : 'hover:bg-gray-100 text-gray-700'
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Emergency Contacts */}
                        <div className="border-t border-gray-200 px-4 py-4">
                            <h3 className="text-sm font-semibold text-gray-800 mb-3">
                                Acil İletişim
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <a
                                    href="tel:112"
                                    className="flex flex-col items-center p-3 bg-red-50 rounded-lg hover:bg-red-100 focus-visible transition-colors duration-200 w-full"
                                >
                                    <span className="text-lg font-bold text-red-600">
                                        112
                                    </span>
                                    <span className="text-xs text-gray-600">
                                        Acil Servis
                                    </span>
                                </a>
                                <a
                                    href="tel:03224547733"
                                    className="flex flex-col items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 focus-visible transition-colors duration-200 w-full"
                                >
                                    <span className="text-sm font-bold text-blue-600">
                                        0322 454 77 33
                                    </span>
                                    <span className="text-xs text-gray-600">
                                        Randevu
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Spacer to prevent content from hiding behind fixed navbar */}
            <div className="h-16 lg:h-20" aria-hidden="true" />
        </>
    )
}

export default Navigation
