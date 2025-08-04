// src/app/components/Header.tsx
'use client';

import Link from 'next/link';
import { Sun, Moon, Menu as MenuIcon, X as CloseIcon } from 'lucide-react';
import { ColorDropdown } from './ColorDropdown';
import { handleSmoothScroll } from '../../utils/scrollUtils';

interface HeaderProps {
  toggleSidebar: () => void;
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark' | null;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, toggleTheme, currentTheme }) => {
  return (
    <nav className="header-nav container">
      <button onClick={toggleSidebar} className="sidebar-toggle-button" aria-label="Toggle mobile sidebar">
        <MenuIcon size={24} />
      </button>

      <Link href="/" className="site-logo">
        Kanish
      </Link>

      <ul className="nav-links">
        <li className="nav-item-desktop">
          <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>About</a>
        </li>
        <li className="nav-item-desktop">
          <a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')}>Skills</a>
        </li>
        <li className="nav-item-desktop">
          <a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')}>Projects</a>
        </li>
        <li className="nav-item-desktop">
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a>
        </li>

        <li className="nav-item-desktop nav-item-sidebar-toggle">
          <button onClick={toggleSidebar} className="desktop-sidebar-toggle-button" aria-label="Toggle sidebar">
            <CloseIcon size={20} className="close-icon" />
            <MenuIcon size={20} className="menu-icon" />
          </button>
        </li>

        <li>
          <ColorDropdown />
        </li>

        <li>
          <button onClick={toggleTheme} className="theme-switcher-button" aria-label="Toggle theme">
            {currentTheme === 'light' ? <Moon /> : <Sun />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;