import React, { useState, useEffect } from 'react';


const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 4l9 5.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.5Z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
);

export default function Sidebar() {
    const [theme, setTheme] = useState('');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            setTheme(prefersDark ? 'dark' : 'light');
        }
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else if (theme === 'light') {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const handleThemeToggle = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <div className="fixed top-1/4 -translate-y-1/2 right-4 md:right-8 z-10">
            <div className="flex flex-col items-center p-2 bg-background/50 backdrop-blur-sm border border-border rounded-full space-y-5 transition-colors">
                <a href="/" className="text-text-secondary hover:text-text-primary transition-colors">
                    <HomeIcon />
                </a>
                <button onClick={handleThemeToggle} className="text-text-secondary hover:text-text-primary transition-colors">
                    <MoonIcon />
                </button>
            </div>
        </div>
    );
}