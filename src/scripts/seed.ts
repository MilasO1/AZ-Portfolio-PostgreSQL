// src/scripts/seed.ts
import betterSqlite3 from 'better-sqlite3';
import path from 'path';
import { mkdirSync } from 'fs';

// Ensure data directory exists
const dbDir = path.join(process.cwd(), 'data');
try {
  mkdirSync(dbDir, { recursive: true });
  console.log(`✅ Created directory at ${dbDir}`);
} catch (err) {
  console.log(`ℹ Directory already exists at ${dbDir}`);
}

// Initialize database connection
const dbPath = path.join(dbDir, 'portfolio.db');
const db = betterSqlite3(dbPath);

// Create projects table if not exists
db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    timeline TEXT NOT NULL,
    stack TEXT NOT NULL,
    features TEXT NOT NULL,
    image TEXT NOT NULL,
    link TEXT NOT NULL
  );
`);

// Clear existing data
db.prepare('DELETE FROM projects').run();

// Insert sample projects
const projects = [
    {
        title: "Chillstreams",
        description: "Site de streaming de anime, avec un catalogue de vidéos et un système de compte.",
        timeline: "Février 2025",
        stack: JSON.stringify(["React", "MongoDB", "CSS", "Node.js", "ExpressJS"]),
        features: JSON.stringify([
            "Catalogue videos : Recherche, filtres, vidéo en streaming",
            "Système de compte : Inscription, connexion",
            "Panneau admin : Gestion des vidéos",
            "Securité : Authentification, JWT, rôles utilisateur (admin/client)"
        ]),
        image: "/images/chillstreamss.png",
        link: "https://github.com/MilasO1/ChillStreams.git"
    },
    // Add other projects...
];

const insert = db.prepare(
    'INSERT INTO projects (title, description, timeline, stack, features, image, link) VALUES (?, ?, ?, ?, ?, ?, ?)'
);

try {
    const insertMany = db.transaction(() => {
        for (const project of projects) {
            insert.run(
                project.title,
                project.description,
                project.timeline,
                project.stack,
                project.features,
                project.image,
                project.link
            );
        }
    });

    insertMany();
    console.log(`✅ Successfully seeded ${projects.length} projects into ${dbPath}`);
} catch (error) {
    console.error('❌ Error seeding database:', error);
} finally {
    db.close();
}