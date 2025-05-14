export async function getPromptTemplate(phase: string, userInput: string): Promise<string> {
    const { onboardingPrompt } = await import("../phases/onboarding");
    const { reflectionPrompt } = await import("../phases/reflection");
    switch (phase) {
      case "onboarding":
        return onboardingPrompt(userInput);
      case "reflection":
        return reflectionPrompt(userInput);  
      // Add other phases: postOnboarding, evaluation, etc.
      default:
        throw new Error("Unknown phase");
    }
  }
  