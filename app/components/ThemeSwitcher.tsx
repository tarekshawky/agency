'use client'
import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState(() =>
        typeof window === 'undefined' ? 'mytheme' : localStorage.getItem('theme') || 'mytheme'
    );

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'mytheme' ? 'darktheme' : 'mytheme';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button onClick={toggleTheme} className="btn btn-primary m-2">
            Switch Theme
        </button>
    );
}
