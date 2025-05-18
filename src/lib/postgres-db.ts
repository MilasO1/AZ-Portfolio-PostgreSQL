// src/lib/postgres-db.ts
import { sql } from '@vercel/postgres';

// Define the Project interface
export interface Project {
    id: number;
    title: string;
    description: string;
    timeline: string;
    stack: string[];
    features: string[];
    image: string;
    link: string;
}

// Helper function to parse project data from Postgres
function parseProject(row: any): Project {
    return {
        id: row.id,
        title: row.title,
        description: row.description,
        timeline: row.timeline,
        stack: Array.isArray(row.stack) ? row.stack : JSON.parse(row.stack),
        features: Array.isArray(row.features) ? row.features : JSON.parse(row.features),
        image: row.image,
        link: row.link
    };
}

// Database operations
export async function getAllProjects(): Promise<Project[]> {
    try {
        const { rows } = await sql`SELECT * FROM projects`;
        return rows.map(parseProject);
    } catch (error) {
        console.error('Database error in getAllProjects:', error);
        throw error;
    }
}

export async function getProjectById(id: number): Promise<Project | undefined> {
    try {
        const { rows } = await sql`SELECT * FROM projects WHERE id = ${id}`;
        return rows.length > 0 ? parseProject(rows[0]) : undefined;
    } catch (error) {
        console.error('Database error in getProjectById:', error);
        throw error;
    }
}