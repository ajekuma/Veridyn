import OpenAI from 'openai';

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Only for development, move to server-side in production
});

export async function getChatGPTResponse(prompt: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
    });

    return completion.choices[0]?.message?.content || "No response from ChatGPT";
  } catch (error: any) {
    console.error("Error calling ChatGPT API:", error);
    
    // Handle specific error cases
    if (error.status === 429) {
      return "API quota exceeded. Please check your OpenAI account billing and quota.";
    } else if (error.status === 401) {
      return "Invalid API key. Please check your OpenAI API key configuration.";
    } else if (error.status === 400) {
      return "Invalid request. Please try again with a different message.";
    } else {
      return "Error getting response from ChatGPT. Please try again later.";
    }
  }
} 