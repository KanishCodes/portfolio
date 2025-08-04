// src/app/layout.tsx
'use client';

import { useState, useEffect } from 'react';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        setTheme(savedTheme);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }
  }, []);

  useEffect(() => {
    if (theme && typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  if (theme === null) {
    return (
        <html lang="en">
            <body>
                <div style={{ display: 'none' }}></div>
            </body>
        </html>
    );
  }

  return (
    <html lang="en" data-theme={theme} suppressHydrationWarning>
      <head>
        <title>Kanish - Full-Stack Developer</title>
        <meta name="description" content="A passionate Full-Stack Developer creating user-friendly and efficient applications, inspired by Tania Rascia." />
      </head>
      <body>
        <div id="layout" className={`layout ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <header className="main-header">
            <Header toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} currentTheme={theme} />
          </header>
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="main-content-area-wrapper">
            <main className="main-content-area">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}