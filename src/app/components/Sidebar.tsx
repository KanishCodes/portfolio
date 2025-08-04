// src/components/Sidebar.tsx
'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Github, Linkedin } from 'lucide-react';
import { handleSmoothScroll } from '../../utils/scrollUtils';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  // This is the new, smarter click handler for the entire component.
  const handleAsideClick = (e: React.MouseEvent<HTMLElement>) => {
    // It checks if you clicked directly on the background (<aside>)
    // and NOT on its children (the content).
    if (e.target === e.currentTarget) {
      toggleSidebar();
    }
  };

  // This effect adds/removes a class to the body to prevent scrolling when the sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    // Cleanup function
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    // THE FIX PART 1: The onClick is now here. The <aside> itself acts as the overlay.
    <aside
      className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}
      onClick={handleAsideClick}
    >
      {/* The separate overlay div is now GONE. */}
      
      {/* The content wrapper no longer needs any special onClick handlers. */}
      <div className="sidebar-content-wrapper">
        <section className="sidebar-section profile-section">
          <Image
            src="/images/kanish-pfp.jpeg"
            alt="Kanish Profile Picture"
            width={100}
            height={100}
            className="profile-image"
            priority
          />
          <h2 className="profile-name">Kanish</h2>
          <p className="profile-tagline">Full-Stack Developer</p>
        </section>

        <nav className="sidebar-nav">
          <ul className="sidebar-nav-list">
            {/* These links will now work correctly */}
            <li><a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>About</a></li>
            <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')}>Skills</a></li>
            <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a></li>
          </ul>
        </nav>

        <section className="sidebar-section">
          <h3>My Core Skills</h3>
          <ul className="sidebar-mini-list">
            <li>JavaScript & TypeScript</li>
            <li>React & Next.js</li>
            <li>Node.js & Express.js</li>
          </ul>
        </section>

        <section className="sidebar-section sidebar-social-links-section">
          <h3>Stay Connected</h3>
          <div className="sidebar-social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin size={20} />
            </a>
          </div>
        </section>
      </div>
    </aside>
  );
};

export default Sidebar;