import { ChromaClient } from 'chromadb';
import { GoogleGenAI } from "@google/genai";

const chromaClient = new ChromaClient({path: "http://localhost:8000"});

export async function generateEmbedding(text: string) {

    const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });

    const response = await ai.models.embedContent({
        model: 'gemini-embedding-exp-03-07',
        contents: text,
    });

    console.log(response.embeddings);
    if (!response.embeddings || response.embeddings.length === 0) {
        throw new Error("Embeddings are undefined or empty");
    }
    return response.embeddings[0].values;
}

// export async function saveAnswersToChroma(userId: string, answers: Record<number, string>): Promise<void> {
//   const collection = await chromaClient.getOrCreateCollection({
//     name: "onboarding_answers",
//     metadata: {
//       "description": "onboarding answers collection"
//     }
//   });

//   const embeddings = await Promise.all(
//     Object.values(answers).map(async (answer) => {
//       const embedding = await generateEmbedding(answer);
//       return embedding;
//     })
//   );

//   const documents = Object.entries(answers).map(([questionId, answer], index) => ({
//     id: `${userId}_${questionId}`,
//     metadata: { userId, questionId },
//     embedding: embeddings[index],
//     content: answer,
//   }));

//   await collection.add({ embeddings: documents.map(doc => doc.embedding), metadatas: documents.map(doc => doc.metadata), documents: documents.map(doc => doc.content), ids: documents.map(doc => doc.id) });
// }