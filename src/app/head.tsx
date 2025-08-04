// src/app/head.tsx
// This file does NOT have 'use client'
export const metadata = {
  title: 'Kanish - Full-Stack Developer',
  description: 'A passionate Full-Stack Developer creating user-friendly and efficient applications, inspired by Tania Rascia.',
  // Add any other meta tags like viewport, icons, etc. here if needed
};

export default function Head() {
  return (
    <>
      {/* Any <head> content that is specific to this route and needs to be rendered */}
      {/* For example, if you had a <title> tag here, it would override the one from metadata */}
    </>
  );
}