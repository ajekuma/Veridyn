import { ChromaClient } from "chromadb";

const client = new ChromaClient();
const collectionName = "onboarding_reflections";

export async function querySimilarEmbeddings(userId: string, embedding: number[]) {
  try {
    const collection = await client.getOrCreateCollection({ name: collectionName });
    const results = await collection.query({
      queryEmbeddings: [embedding],
      nResults: 3,
      where: { userId }
    });

    return results.documents[0].map((doc: any, i: number) => ({
      id: results.ids[0][i],
      metadata: results.metadatas[0][i],
      score: results.distances?.[0]?.[i] ?? null
    }));
  } catch (error) {
    console.error("ChromaDB query error:", error);
    return [];
  }
}

export async function upsertEmbeddingToChroma(userId: string, docId: string, embedding: number[], metadata: any) {
  try {
    const collection = await client.getOrCreateCollection({ name: collectionName });
    await collection.upsert({
      ids: [docId],
      embeddings: [embedding],
      metadatas: [{ ...metadata, userId }],
      documents: [metadata.summary || ""]
    });
  } catch (error) {
    console.error("ChromaDB upsert error:", error);
  }
}