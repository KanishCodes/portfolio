// src/components/ColorDropdown.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';

export const ColorDropdown = () => {
  const dropdownRef = useRef<HTMLDivElement>(null); // Specify type for useRef
  const [open, setOpen] = useState(false);
  // Initialize with a default color or from localStorage
  const [currentColor, setCurrentColor] = useState('var(--theme-pink)');

  // These are the CSS variables defined in your globals.css
  const colors = [
    'var(--theme-pink)',
    'var(--theme-yellow)',
    'var(--theme-green)',
    'var(--theme-blue)',
    'var(--theme-lavender)',
  ];

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSelectColor = (color: string) => { // Specify type for color
    if (typeof window !== 'undefined') { // Check for window to ensure client-side
      window.localStorage.setItem('color', color);
    }
    setCurrentColor(color);
    handleToggle(); // Close dropdown after selection
  };

  // Load saved color from localStorage on initial mount
  useEffect(() => {
    if (typeof window !== 'undefined') { // Check for window to ensure client-side
      const savedColor = window.localStorage.getItem('color');
      if (savedColor) {
        setCurrentColor(savedColor);
      }
    }
  }, []);

  // Apply the selected color to the --color-primary CSS variable
  useEffect(() => {
    if (currentColor) {
      if (typeof document !== 'undefined') { // Check for document to ensure client-side
        const root = document.querySelector(':root') as HTMLElement; // Cast to HTMLElement
        if (root) {
          root.style.setProperty('--color-primary', currentColor);
        }
      }
    }
  }, [currentColor]);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => { // Specify type for event
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (typeof document !== 'undefined') { // Check for document to ensure client-side
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    };
  }, []); // Empty dependency array, as dropdownRef is stable

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        onClick={handleToggle}
        className={`navbar-button ${open ? 'active' : ''}`}
        aria-label="Select primary color"
      >
        {/* You can replace this div with a Lucide icon like <Palette size={20} /> */}
        <div className="circle" style={{ backgroundColor: currentColor }} />
      </button>
      {open && (
        <div className="dropdown-results">
          <div className="circles">
            {colors.map((color) => (
              <div
                key={color}
                className="dropdown-option"
                onClick={() => handleSelectColor(color)}
              >
                <div style={{ backgroundColor: color }} className="circle" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};