// src/app/components/Projects.tsx
import ProjectCard from "./ProjectCard";
import React from 'react';

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string | null;
  githubUrl?: string | null;
};

async function getProjects(): Promise<Project[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/projects`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch projects: ${res.statusText}`);
  }
  return res.json();
}

export default async function Projects() {
  let projects: Project[] = [];
  let error: string | null = null;

  try {
    projects = await getProjects();
  } catch (err) {
    console.error("Errror loading projects:", err);
    error = "Failed to load projects. Please try again later.";
  }

  return (
    // THE ONLY CHANGE IS HERE: className="projects-container"
    <div className="projects-container">
      {error && (
        <p className="section-content-placeholder" style={{ color: 'red' }}>{error}</p>
      )}

      {!projects.length && !error && (
        <p className="section-content-placeholder">No projects found. Add some in Prisma Studio!</p>
      )}

      <div className="cards-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            imageUrl={project.imageUrl}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </div>
  );
}