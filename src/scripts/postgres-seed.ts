// src/scripts/postgres-seed.ts
import { config } from 'dotenv';
import { resolve } from 'path';
import { sql } from '@vercel/postgres';

// Load environment variables from .env.local
config({ path: resolve(process.cwd(), '.env.local') });

// Check if the environment variable is loaded
console.log('Database URL available:', !!process.env.POSTGRES_URL);

async function seedProjects() {
  try {
    // Create the table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        timeline VARCHAR(255) NOT NULL,
        stack JSONB NOT NULL,
        features JSONB NOT NULL,
        image VARCHAR(255) NOT NULL,
        link VARCHAR(255) NOT NULL
      );
    `;
    
    console.log(` Projects table created successfully`);
    
    // Clear existing data
    await sql`DELETE FROM projects`;
    console.log(` Cleared existing projects data`);
    
    // Insert sample projects
    const projects = [
      {
        title: "Chillstreams",
        description: "Site de streaming de anime, avec un catalogue de vidéos et un système de compte.",
        timeline: "Février 2025",
        stack: ["React", "MongoDB", "CSS", "Node.js", "ExpressJS"],
        features: [
          "Catalogue videos : Recherche, filtres, vidéo en streaming",
          "Système de compte : Inscription, connexion",
          "Panneau admin : Gestion des vidéos",
          "Securité : Authentification, JWT, rôles utilisateur (admin/client)"
        ],
        image: "/images/chillstreamss.png",
        link: "https://github.com/MilasO1/ChillStreams.git"
      },
      // Add your other projects here as needed
    ];
    
    // Insert projects one by one
    for (const project of projects) {
      await sql`
        INSERT INTO projects (title, description, timeline, stack, features, image, link)
        VALUES (
          ${project.title},
          ${project.description},
          ${project.timeline},
          ${JSON.stringify(project.stack)},
          ${JSON.stringify(project.features)},
          ${project.image},
          ${project.link}
        )
      `;
    }
    
    console.log(`✅ Successfully seeded ${projects.length} projects`);
    
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  }
}

async function main() {
  try {
    await seedProjects();
  } catch (error) {
    console.error('Failed to seed the database:', error);
    process.exit(1);
  } 
}

main();
