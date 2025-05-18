"use client";

import ProjectItem from "./ProjectItem";
import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) throw new Error('Failed to fetch projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projets
        </h2>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <p className="text-slate-400">Chargement des projets...</p>
        </div>
      ) : projects.length === 0 ? (
        <div className="flex justify-center items-center py-12">
          <p className="text-slate-400">Aucun projet à afficher</p>
        </div>
      ) : (
        <div>
          <ul className="group/list">
            {projects.map((project) => (
              <ProjectItem
                key={project.id}
                title={project.title}
                description={project.description}
                timeline={project.timeline}
                stack={project.stack}
                features={project.features}
                image={project.image}
                link={project.link}
              />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
