// src/components/Footer.tsx
// This component can remain a Server Component as it does not use client-side hooks or interactivity.
import React from 'react';

export default function Footer() {
  return (
    // Replaced Tailwind classes with .main-footer from globals.css
    <footer className="main-footer">
      <div className="container"> {/* Use .container for consistent width */}
        <p>&copy; {new Date().getFullYear()} Kanish. All rights reserved.</p>
        {/* Removed Tailwind text-sm mt-2, relying on global p styles and footer specific styles */}
        <p>Built with Next.js, Prisma, and PostgreSQL.</p>
      </div>
    </footer>
  );
}