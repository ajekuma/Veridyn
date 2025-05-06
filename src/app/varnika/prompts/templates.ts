export async function getPromptTemplate(phase: string, userInput: string): Promise<string> {
    const { onboardingPrompt } = await import("../phases/onboarding");
    switch (phase) {
      case "onboarding":
        return onboardingPrompt(userInput);
      // Add other phases: postOnboarding, evaluation, etc.
      default:
        throw new Error("Unknown phase");
    }
  }
  