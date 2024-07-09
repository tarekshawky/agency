'use client'
import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState('mytheme');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'mytheme';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'mytheme' ? 'darktheme' : 'mytheme';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button onClick={toggleTheme} className="btn btn-primary m-2">
            Switch Theme
        </button>
    );
}
