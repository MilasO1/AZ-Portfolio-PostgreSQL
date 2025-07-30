"use client";

import ExperienceItem from "./ExperienceItem";
import Link from "next/link";
export default function Experience() {
  const experiences = [
    {
      timeline: "Octobre 2024 — Présent",
      title:
        "Titre Professionnel Developpeur Web et Web Mobile Full Stack (Niveau 5)",
      entreprise: "AFEC - Bayonne",
      description: [
        "Maquettage & prototypage",
        "Réalisation d'UI responsive",
        "Développement de la partie dynamique UI ",
        "Mettre en place une BDD",
        "Développement de services métiers",
        "Langages & Frameworks : HTML, CSS, JS, TS | React, Next.js, Node.js, MongoDB",
        "Développement d'API REST",
        "Développement d'applications web",
        "Développement d'applications mobiles",
      ],
    },
    {
      timeline: "Mai 2024 — Juin 2024",
      title: "Stage de développement web",
      entreprise: "La Capitainerie - Anglet",
      description: [
        "Maquettage & prototypage",
        "Réalisation d'UI responsive",
        "Développement de la partie dynamique UI ",
        "Langages & Frameworks : HTML, CSS, JS | Webflow",
      ],
    },
    {
      timeline: "Fevrier 2024 — Juin 2024",
      title: "Action preparatoire aux métiers du numérique",
      entreprise: "GRETA - Bayonne",
      description: [
        "Compréhension du fonctionnement du Web",
        "Langages de base : HTML & CSS",
        "Découverte du langage JavaScript",
        "Utilisation d'outils et d'environnements",
      ],
    }, 
  ];

  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-38 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-blue-200 lg:sr-only">
          Expérience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </ol>
      </div>
      <div className="mt-8 flex">
        <a
          href="/others/AyoubZINANE-CV.pdf"
          download
          className="inline-flex items-center gap-2 rounded-lg bg-blue-900/40 px-4 py-2 text-sm font-medium text-blue-300 hover:bg-blue-800/60 transition-colors hover:text-blue-100"
        >
          <span>Télécharger mon CV complet</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
