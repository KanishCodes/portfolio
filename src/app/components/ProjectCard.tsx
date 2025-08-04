// src/app/components/ProjectCard.tsx
// This component can remain a Server Component if it doesn't use client-side hooks or event listeners.
// It will be rendered on the server and sent as HTML to the client.
import { Github, Link as ExternalLinkIcon } from 'lucide-react'; // Renamed Link to ExternalLinkIcon to avoid conflict with next/link
import Image from 'next/image';
// localPlaceholderImage import is typically not needed if imageUrl comes from data
// import localPlaceholderImage from '../../../public/images/placeholder.png'; // No longer needed if imageUrl comes from data

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string; // This should be a URL or path to your project image
  liveUrl?: string | null;
  githubUrl?: string | null;
};

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl, // This should come from your database
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    // Removed all Tailwind classes: bg-card rounded-lg overflow-hidden border border-border shadow-lg hover:shadow-primary-md transition-all duration-300 flex flex-col h-full
    <div className="card"> {/* Use the .card class from globals.css */}
      {/* Image container */}
      {/* Removed all Tailwind classes: relative w-full h-48 bg-muted/20 flex items-center justify-center overflow-hidden */}
      <div className="card-image-container"> {/* Use the .card-image-container class */}
        <Image
          src={imageUrl} // Use the imageUrl prop from your fetched data
          alt={title}
          fill // Ensure image fills the container
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="" // Removed Tailwind: transition-transform duration-300 hover:scale-105 object-cover (CSS will handle this)
          // priority={index === 0} // Optional: Add priority for first few images if this is a static list
        />
      </div>

      {/* Content Area */}
      {/* Removed all Tailwind classes: p-6 flex flex-col flex-grow */}
      <div className="card-content"> {/* Use the .card-content class */}
        {/* Removed all Tailwind classes: text-xl font-bold mb-2 text-white */}
        <h3 className="card-title">{title}</h3>

        {/* Removed all Tailwind classes: text-secondary text-sm mb-4 line-clamp-3 flex-grow */}
        <p className="card-description">{description}</p>

        {/* Tags */}
        {/* Removed all Tailwind classes: flex flex-wrap gap-2 mb-4 mt-auto */}
        <div className="card-tags"> {/* Use the .card-tags class */}
          {tags.map((tag) => (
            // Removed all Tailwind classes: bg-border text-secondary text-xs font-semibold px-2.5 py-1 rounded-full border border-muted
            <span key={tag} className="card-tag"> {/* Use the .card-tag class */}
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {/* Removed all Tailwind classes: flex items-center gap-4 pt-4 border-t border-border */}
        <div className="card-links"> {/* Use the .card-links class */}
          {liveUrl && (
            // Removed all Tailwind classes: text-primary hover:text-blue-400 transition-colors duration-200 inline-flex items-center gap-1 text-sm font-medium
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLinkIcon size={16} /> {/* Use ExternalLinkIcon */}
              Live Demo
            </a>
          )}
          {githubUrl && (
            // Removed all Tailwind classes: text-secondary hover:text-white transition-colors duration-200 inline-flex items-center gap-1 text-sm font-medium
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}