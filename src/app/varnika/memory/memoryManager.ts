export async function getRelevantContext(userId: string, userInput: string) {
    const { querySimilarEmbeddings } = await import("./vectorstore");
    const { generateEmbedding } = await import("./embeddings");
    const embedding = await generateEmbedding(userInput);
    if (!embedding) {
        throw new Error("Failed to generate embedding");
    }
    return querySimilarEmbeddings(userId, embedding);
  }
  
  export async function saveReflection(userId: string, userInput: string, phase: string) {
    const { generateEmbedding } = await import("./embeddings");
    const { upsertEmbeddingToChroma, querySimilarEmbeddings } = await import("./vectorstore");
    const embedding = await generateEmbedding(userInput);
    if (!embedding) {
        throw new Error("Failed to generate embedding");
    }
    const docId = `${userId}-${Date.now()}`;
    const metadata = {
      phase,
      timestamp: new Date().toISOString(),
      summary: userInput.slice(0, 100),
    };
  
    await upsertEmbeddingToChroma(userId, docId, embedding, metadata);
  }