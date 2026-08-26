'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <header className={`navbar-header ${scrolled ? 'navbar-header-scrolled' : ''}`}>
                <div className="container">
                    <div className="navbar justify-between gap-4">
                        <div className="navbar-start">
                            <Link href="/" className="font-bold text-xl">Tarek<span className='text-primary'>Shawky</span></Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li><a className='nav-link' href='#about'>About me</a></li>
                                <li><a className='nav-link' href='#projects'>Last Projects</a></li>
                            </ul>
                        </div>
                        <div className="navbar-end gap-3">
                            <a href='/Tarek-Shawky-CV.pdf' download className="btn btn-outline btn-primary px-6 hidden sm:flex">Download CV</a>
                            <a href='mailto:tarekshawky2016@gmail.com?subject=Let%27s%20Work%20Together&body=Hi%20Tarek%2C%0D%0A%0D%0AI%27d%20like%20to%20talk%20about...' className="btn btn-primary px-4 sm:px-8">Contact me</a>

                            <button
                                type="button"
                                aria-label="Open menu"
                                className="btn btn-ghost lg:hidden"
                                onClick={() => setIsOpen(true)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div
                className={`mobile-sidebar-overlay ${isOpen ? 'mobile-sidebar-overlay-open' : ''}`}
                onClick={closeMenu}
            />

            <aside className={`mobile-sidebar ${isOpen ? 'mobile-sidebar-open' : ''}`}>
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-700">
                    <span className="font-bold text-lg">Tarek<span className='text-primary'>Shawky</span></span>
                    <button
                        type="button"
                        aria-label="Close menu"
                        className="btn btn-ghost btn-sm btn-circle"
                        onClick={closeMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <ul className="menu flex flex-col gap-1 p-4">
                    <li><a className='nav-link' href='#about' onClick={closeMenu}>About me</a></li>
                    <li><a className='nav-link' href='#projects' onClick={closeMenu}>Last Projects</a></li>
                    <li><a className='nav-link' href='/Tarek-Shawky-CV.pdf' download onClick={closeMenu}>Download CV</a></li>
                </ul>
            </aside>
        </>
    );
}
