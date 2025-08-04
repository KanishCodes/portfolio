// src/app/components/SocialLinks.tsx
import { Github, Linkedin, Twitter, Mail, Code, MessageSquare, Instagram, Phone } from 'lucide-react';
import React from 'react';

// We define the list of social links here for easy editing
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/KanishCodes',
    icon: <Github />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kanish-mahajan-a796952b1/',
    icon: <Linkedin />,
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/kanishmahajann',
    icon: <Twitter />,
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/your-leetcode-username',
    icon: <Code />, // Using a generic 'Code' icon
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/your-instagram-handle',
    icon: <Instagram />,
  },
  {
    name: 'Gmail',
    url: 'mailto:kanishmahajann@gmail.com',
    icon: <Mail />,
  },
  {
    name: 'Discord',
    url: 'https://discord.com/users/your-discord-id',
    icon: <MessageSquare />, // Using a generic 'Message' icon
  },
  {
    name: 'Phone',
    url: 'callto:6239749984',
    icon: <Phone/>, // Using a generic 'Message' icon
  },
];

export default function SocialLinks() {
  return (
    <div className="social-links-grid">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link-item"
        >
          <div className="social-icon">{link.icon}</div>
          <span className="social-name">{link.name}</span>
        </a>
      ))}
    </div>
  );
}