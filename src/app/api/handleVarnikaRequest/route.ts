import { NextResponse } from 'next/server';
import { handleVarnikaRequest } from '@/app/varnika/orchestrator';

export async function POST(request: Request) {
  try {
    const { phase, userInput, userId } = await request.json();

    // Orchestrate the Varnika request
    const result = await handleVarnikaRequest(phase, userInput, userId);

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Error handling Varnika request:', error);
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}