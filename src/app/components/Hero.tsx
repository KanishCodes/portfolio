// src/components/Hero.tsx
'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};

// Variants for the subtle graphic animation (just entrance, then CSS handles loop)
const graphicVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 0.8, scale: 1, transition: { duration: 1.5, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section className="hero-section">
      <motion.div
        className="hero-inner container" // Apply .container for max-width and padding
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content">
          <motion.h1 className="hero-title" variants={itemVariants}>
            Hi, I&apos;m <span className="highlight">Kanish</span>
          </motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants}>
            Full-Stack Developer
          </motion.p>
          <motion.p className="hero-description" variants={itemVariants}>
            A passionate developer who loves building user-friendly and efficient applications. I enjoy bringing ideas to life with modern tools and technologies, always eager to solve problems and create meaningful digital experiences.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <Link href="/images/placeholder.png" download className="btn btn-primary">
              Download CV
            </Link>
            <Link href="#contact" className="btn btn-secondary">
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Right-side animated graphic (New "Techy Network" SVG) */}
        <motion.div className="hero-graphic-wrapper" variants={graphicVariants}>
          <svg className="animated-network-graphic" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%', height: 'auto' }}>
            {/* Main large circle */}
            <circle cx="100" cy="100" r="80" stroke="var(--color-primary)" strokeWidth="1" opacity="0.1"/>
            {/* Inner circles */}
            <circle cx="50" cy="50" r="5" fill="var(--color-accent)" opacity="0.6"/>
            <circle cx="150" cy="80" r="5" fill="var(--color-accent)" opacity="0.6"/>
            <circle cx="70" cy="150" r="5" fill="var(--color-accent)" opacity="0.6"/>
            <circle cx="120" cy="30" r="5" fill="var(--color-accent)" opacity="0.6"/>
            <circle cx="80" cy="10" r="5" fill="var(--color-accent)" opacity="0.6"/>

            {/* Connecting lines */}
            <line x1="50" y1="50" x2="150" y2="150" stroke="var(--color-primary)" strokeWidth="1" opacity="0.4"/>
            <line x1="50" y1="50" x2="70" y2="150" stroke="var(--color-primary)" strokeWidth="1" opacity="0.4"/>
            <line x1="150" y1="80" x2="70" y2="150" stroke="var(--color-primary)" strokeWidth="1" opacity="0.4"/>
            <line x1="120" y1="30" x2="50" y2="50" stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.3"/>
            <line x1="150" y1="80" x2="120" y2="30" stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.3"/>
            <line x1="80" y1="10" x2="120" y2="30" stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.3"/>
            <line x1="80" y1="10" x2="50" y2="50" stroke="var(--color-primary)" strokeWidth="1" opacity="0.4"/>

            {/* Dash lines for extra techy feel */}
            <line x1="10" y1="100" x2="190" y2="100" stroke="var(--color-secondary-text)" strokeWidth="0.5" strokeDasharray="5 5" opacity="0.2"/>
            <line x1="100" y1="10" x2="100" y2="190" stroke="var(--color-secondary-text)" strokeWidth="0.5" strokeDasharray="5 5" opacity="0.2"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;