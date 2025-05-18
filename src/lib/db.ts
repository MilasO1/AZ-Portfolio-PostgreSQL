import Database from 'better-sqlite3';
import path from 'path';

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

// Initialize database immediately with correct path
const dbPath = path.join(process.cwd(), 'data', 'portfolio.db');
const db = new Database(dbPath);

// Set up database schema if it doesn't exist
db.pragma('journal_mode = WAL');
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

// Helper function to parse project data
function parseProject(row: any): Project {
    return {
        ...row,
        stack: JSON.parse(row.stack),
        features: JSON.parse(row.features)
    };
}

// Database operations
export function getAllProjects(): Project[] {
    try {
        const rows = db.prepare('SELECT * FROM projects').all();
        return rows.map(parseProject);
    } catch (error) {
        console.error('Database error in getAllProjects:', error);
        throw error;
    }
}

export function getProjectById(id: number): Project | undefined {
    try {
        const row = db.prepare('SELECT * FROM projects WHERE id = ?').get(id);
        return row ? parseProject(row) : undefined;
    } catch (error) {
        console.error('Database error in getProjectById:', error);
        throw error;
    }
}