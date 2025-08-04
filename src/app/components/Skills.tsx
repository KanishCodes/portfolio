// src/app/components/Skills.tsx
import React from 'react';

// We organize your skills into categories for clarity
const skillCategories = [
  {
    title: 'Frontend',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Prisma', 'REST APIs'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    title: 'Languages & Tools',
    skills: ['Python', 'Java', 'C++', 'C', 'Git', 'Vercel'],
  }
];

export default function Skills() {
  return (
    <div className="skills-container">
      {skillCategories.map((category) => (
        <div key={category.title} className="skill-category">
          <h3 className="skill-category-title">{category.title}</h3>
          <div className="skill-tags">
            {category.skills.map((skill) => (
              <div key={skill} className="skill-tag">
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}