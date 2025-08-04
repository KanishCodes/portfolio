// src/app/page.tsx
import Hero from './components/Hero';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks'; // Import the new component
import Skills from './components/Skills';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Brief About/Intro Section */}
     {/* src/app/page.tsx */}

{/* ... inside your HomePage component ... */}

<section id="about" className="section-wrapper wide">
  <h2 className="section-title">About Me</h2>
  {/* New two-column layout container */}
  <div className="about-layout">
    {/* Column 1: Text */}
    <div className="about-text">
      <h3>A Story of Code and Creativity</h3>
      <p>
        Hello! I&apos;m Kanish, a software engineer who loves to build things for the web. I&apos;m meticulous by nature—a trait that serves me well whether I am pushing my limits or pushing code to production. I believe the details make all the difference in creating clean, efficient, and user-friendly applications.
      </p>
      <p>
         This portfolio is my corner of the internet, a place to showcase my projects and share what I am learning along the way.
      </p>
     
    </div>
    {/* Column 2: Image */}
    <div className="about-image">
            {/* 3. Use the Next.js Image component */}
            <Image
              src="/images/kanish_big.jpg"
              alt="A photo of Kanish"
              className="profile-photo"
              width={350}
              height={350}
              priority
            />
          </div>
        </div>
      </section>
    

{/* ... the rest of your page (Skills, Projects, etc.) ... */}

      {/* Skills Section */}
     <section id="skills" className="section-wrapper container">
  <h2 className="section-title">Skills & Expertise</h2>
  <Skills />
</section>

      {/* Projects Section */}
      <section id="projects" className="section-wrapper container">
        <h2 className="section-title">My Projects</h2>
        <Projects />
      </section>

      {/* Contact Section - NOW WITH SOCIAL LINKS */}
      <section id="contact" className="section-wrapper container">
        <h2 className="section-title">Get in Touch</h2>
        <SocialLinks /> {/* Use the SocialLinks component here */}
      </section>
    </>
  );
}