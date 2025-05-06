import { NextResponse } from 'next/server';
import { saveReflection } from '@/app/varnika/memory/memoryManager';

export async function POST(request: Request) {
  try {
    const { userId, answer, phase } = await request.json();

    // Save the reflection using chromadb
    await saveReflection(userId, answer, phase);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving reflection:', error);
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}