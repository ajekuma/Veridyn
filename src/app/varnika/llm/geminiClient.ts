export async function callLLM({ prompt, context }: { prompt: string, context: any }) {
    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + process.env.NEXT_PUBLIC_GEMINI_API_KEY, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: context.map((c: any) => c.metadata.summary).join("\n") + "\n" + prompt
              }
            ]
          }
        ]
      })
    });
    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "[No response]";
  }