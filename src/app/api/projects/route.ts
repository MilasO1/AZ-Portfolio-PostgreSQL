import { NextResponse } from 'next/server';
import { getAllProjects } from '@/lib/db';

export const dynamic = 'force-dynamic'; // Important for Next.js API routes

export async function GET() {
    try {
        console.log("Fetching projects...");
        const projects = getAllProjects();
        console.log(`Found ${projects.length} projects`);
        return NextResponse.json(projects);
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { 
                error: 'Failed to fetch projects',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}