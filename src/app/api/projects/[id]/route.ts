// src/app/api/projects/[id]/route.ts
import { NextResponse } from 'next/server';
import { getProjectById } from '@/lib/postgres-db';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const id = parseInt(params.id);
        if (isNaN(id)) {
            return NextResponse.json(
                { error: 'Invalid project ID' },
                { status: 400 }
            );
        }

        const project = await getProjectById(id);
        if (!project) {
            return NextResponse.json(
                { error: 'Project not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(project);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch project' },
            { status: 500 }
        );
    }
}