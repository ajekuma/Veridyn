export async function handleVarnikaRequest(phase: string, userInput: string, userId: string) {
    const { getPromptTemplate } = await import("../prompts/templates");
    const { getRelevantContext, saveReflection } = await import("../memory/memoryManager");
    const { callLLM } = await import("../llm/geminiClient");
  
    const prompt = await getPromptTemplate(phase, userInput);
    const context = await getRelevantContext(userId, userInput);
    console.log("Context:", context);
    const response = await callLLM(prompt, context);
  
    //await saveReflection(userId, userInput, phase); // Auto-save after response
  
    return response;
  }