'use client'

import { useEffect, useState } from 'react';
import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiWordpress,
    SiJavascript,
    SiShopify,
    SiPrisma,
    SiElementor,
    SiClaude,
} from 'react-icons/si';
import { FaWhatsapp } from 'react-icons/fa';

const ROLES = [
    'Frontend Developer',
    'Next.js Developer',
    'React Developer',
    'UI/UX-Focused Engineer',
];

const TECH_ICONS = [
    { icon: SiNextdotjs, label: 'Next.js' },
    { icon: SiReact, label: 'React' },
    { icon: SiTypescript, label: 'TypeScript' },
    { icon: SiTailwindcss, label: 'Tailwind CSS' },
    { icon: SiJavascript, label: 'JavaScript' },
    { icon: SiWordpress, label: 'WordPress' },
    { icon: SiShopify, label: 'Shopify' },
    { icon: SiPrisma, label: 'Prisma' },
    { icon: SiElementor, label: 'Elementor' },
    { icon: SiClaude, label: 'Claude AI' },
];

function useTypewriter(words: string[], typingSpeed = 90, deletingSpeed = 45, pauseTime = 1800) {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = words[index % words.length];
        let timeout: ReturnType<typeof setTimeout>;

        if (!deleting && text === current) {
            timeout = setTimeout(() => setDeleting(true), pauseTime);
        } else if (deleting && text === '') {
            setDeleting(false);
            setIndex((i) => i + 1);
        } else {
            timeout = setTimeout(() => {
                setText((t) => current.slice(0, deleting ? t.length - 1 : t.length + 1));
            }, deleting ? deletingSpeed : typingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [text, deleting, index, words, typingSpeed, deletingSpeed, pauseTime]);

    return text;
}

export default function HeroSection() {
    const typedRole = useTypewriter(ROLES);

    return (
        <section className="hero-section relative min-h-screen flex items-center overflow-hidden">
            <div className="hero-glow" aria-hidden="true" />

            <div className="container relative z-10 flex flex-col items-center gap-6 py-28 text-center">
                <span className="hero-badge">👋 Hello, I&apos;m Tarek Shawky</span>

                <h1 className="hero-title">
                    Hi, I&apos;m <span className="text-primary">Tarek Shawky</span>
                    <span className="hero-role">
                        {typedRole}
                        <span className="typewriter-cursor" />
                    </span>
                </h1>

                <p className="max-w-2xl text-md md:text-xl text-gray-300">
                    Results-driven frontend developer with 4+ years of experience building
                    responsive, high-performance websites and web apps with Next.js, React,
                    and TailwindCSS &mdash; delivered 15+ projects with a strong focus on
                    UI/UX and performance.
                </p>

                <div className="hero-pill">
                    <span className="status-dot" />
                    Currently working remotely with a <span className="text-primary font-semibold">UAE-based company</span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                    <a href="/Tarek-Shawky-CV.pdf" download className="btn btn-primary px-8">
                        Download CV
                    </a>
                    <a
                        href="https://wa.me/201027381528"
                        target="_blank"
                        className="btn bg-emerald-600 hover:bg-emerald-700 border-none text-white px-8 gap-2"
                    >
                        <FaWhatsapp size={20} />
                        Chat on WhatsApp
                    </a>
                </div>

                <div className="hero-tech-orbit">
                    {TECH_ICONS.map(({ icon: Icon, label }, i) => (
                        <div
                            key={label}
                            className="hero-tech-icon"
                            style={{ animationDelay: `${i * 0.3}s` }}
                            title={label}
                        >
                            <Icon />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
