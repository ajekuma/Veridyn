// export async function callLLM({ prompt, context }: { prompt: string, context: any }) {
//     const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + process.env.NEXT_PUBLIC_GEMINI_API_KEY, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         contents: [
//           {
//             role: "user",
//             parts: [
//               {
//                 text: context.map((c: any) => c.metadata.summary).join("\n") + "\n" + prompt
//               }
//             ]
//           }
//         ]
//       })
//     });
//     const data = await response.json();
//     return data.candidates?.[0]?.content?.parts?.[0]?.text || "[No response]";
//   }


  import { GoogleGenerativeAI } from '@google/generative-ai';
  
  // Initialize the Gemini client
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');
  
  export async function callLLM(prompt: string, context: any){
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: context.map((c: any) => c.metadata.summary).join("\n") + "\n" + prompt }]
            }]
          })
        }
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      //TODO: remove  "```json\n and \n```" from the response
      return data.candidates[0]?.content?.parts[0]?.text || "No response from Gemini";
    } catch (error: any) {
      console.error("Error calling Gemini API:", error);
      
      // Handle specific error cases
      if (error.status === 429) {
        return "API quota exceeded. Please check your Google AI account billing and quota.";
      } else if (error.status === 401) {
        return "Invalid API key. Please check your Google AI API key configuration.";
      } else if (error.status === 400) {
        return "Invalid request. Please try again with a different message.";
      } else {
        return "Error getting response from Gemini. Please try again later.";
      }
    }
  } 

  function extractJsonFromLLMResponse(response: string): any {
    const cleaned = response.replace(/^```json\n?|\n?```$/g, '').trim();
    return JSON.parse(cleaned);
  }