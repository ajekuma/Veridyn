'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import VarnikasMirror from '@/components/VarnikasMirror';

interface Question {
  id: number;
  text: string;
  type: 'text' | 'slider' | 'choice';
  choices?: string[];
  min?: number;
  max?: number;
}

const questions: Question[] = [
  {
    id: 1,
    text: "How do you typically approach important business decisions?",
    type: "text"
  },
  {
    id: 2,
    text: "On a scale of 1-10, how comfortable are you with finances of the company?",
    type: "slider",
    min: 1,
    max: 10
  },
  {
    id: 3,
    text: "When faced with a difficult choice, what's your primary consideration?",
    type: "choice",
    choices: ["Logic and facts", "Intuition and feelings", "Others' opinions", "Past experiences"]
  },
  {
    id: 4,
    text: "How much risk can you take ?",
    type: "text"
  },
  {
    id: 5,
    text: "What role does time pressure play in your decision-making?",
    type: "choice",
    choices: ["I work better under pressure", "I prefer taking my time", "Depends on the situation", "I try to avoid it"]
  },
  {
    id: 6,
    text: "Rate your willingness to take risks in major life decisions:",
    type: "slider",
    min: 1,
    max: 10
  },
  {
    id: 7,
    text: "What's your biggest fear when making important decisions?",
    type: "text"
  }
];

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentAnswer, setCurrentAnswer] = useState("");

  const currentQuestion = questions[currentStep - 1];
  const totalSteps = questions.length;

  const handleNext = async () => {
    if (currentAnswer.trim() !== "") {
      setAnswers(prev => ({
        ...prev,
        [currentStep]: currentAnswer
      }));

      // Save the current answer to the server API
      const dummyUserId = 'user123';
      const phase = 'onboarding';
      try {
        await fetch('/api/saveReflection', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: dummyUserId, answer: currentAnswer, phase }),
        });
      } catch (error) {
        console.error('Failed to save reflection:', error);
      }

      if (currentStep < totalSteps) {
        setCurrentStep(prev => prev + 1);
        setCurrentAnswer("");
      } else {
        // Handle completion
        router.push('/evaluation');
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      setCurrentAnswer(answers[currentStep - 1] || "");
    }
  };

  const generateReflection = () => {
    const reflections = [];
    for (let i = 1; i < currentStep; i++) {
      if (answers[i]) {
        const question = questions[i - 1];
        let reflection = "";
        
        switch (question.type) {
          case "slider":
            reflection = `Your comfort level with ${question.text.toLowerCase().includes('risk') ? 'risk' : 'uncertainty'} is ${answers[i]}/10.`;
            break;
          case "choice":
            reflection = `You tend to ${answers[i].toLowerCase()} when making decisions.`;
            break;
          case "text":
            reflection = `"${answers[i]}"`;
            break;
        }
        
        reflections.push(reflection);
      }
    }
    return reflections;
  };

  return (
    <div className="bg-gradient-to-b from-[#5275A9] to-[#E6DDE4]">
      <div className="flex flex-col min-h-screen">
        {/* Main Question Area */}
        <div className="flex-1 p-8">
          {/* Varnika Branding */}
          <div className="max-w-2xl mx-auto mb-12 flex flex-col items-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">Varnika</h1>
            <p className="text-sm text-gray-600">Your AI Companion</p>
          </div>

          {/* Progress Indicator */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 text-sm">Step {currentStep} of {totalSteps}</span>
              <div className="flex-1 mx-4">
                <div className="h-1 bg-white/20 rounded-full">
                  <div 
                    className="h-full bg-accent rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  />
                </div>
              </div>
              <span className="text-gray-700 text-sm">{Math.round((currentStep / totalSteps) * 100)}%</span>
            </div>
          </div>

          {/* Question Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-2xl text-gray-800 mb-6">{currentQuestion.text}</h2>
              
              {/* Dynamic Input Based on Question Type */}
              {currentQuestion.type === 'text' && (
                <textarea
                  value={currentAnswer}
                  onChange={(e) => setCurrentAnswer(e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-white/10 text-gray-700 placeholder-gray-500 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
                  rows={4}
                  placeholder="Type your answer here..."
                />
              )}

              {currentQuestion.type === 'slider' && (
                <div className="space-y-4">
                  <input
                    type="range"
                    min={currentQuestion.min}
                    max={currentQuestion.max}
                    value={currentAnswer || currentQuestion.min}
                    onChange={(e) => setCurrentAnswer(e.target.value)}
                    className="w-full"
                  />
                  <div className="flex justify-between text-gray-700 text-sm">
                    <span>Low</span>
                    <span>High</span>
                  </div>
                </div>
              )}

              {currentQuestion.type === 'choice' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentQuestion.choices?.map((choice) => (
                    <button
                      key={choice}
                      onClick={() => setCurrentAnswer(choice)}
                      className={`px-4 py-3 rounded-md border border-white/20 text-gray-700 text-left transition-colors ${
                        currentAnswer === choice ? 'bg-accent text-white' : 'bg-white/10 hover:bg-white/20'
                      }`}
                    >
                      {choice}
                    </button>
                  ))}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <button
                    onClick={handlePrevious}
                    className="px-6 py-2 bg-accent text-white rounded-full hover:bg-accent-foreground hover:text-accent transition-colors"
                  >
                    ← Previous
                  </button>
                )}
                <button
                  onClick={handleNext}
                  disabled={!currentAnswer.trim()}
                  className="px-6 py-2 bg-accent text-white rounded-full hover:bg-accent-foreground hover:text-accent transition-colors ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentStep === totalSteps ? "Complete" : "Next →"}
                </button>
              </div>
            </div>
          </div>

          {/* Varnika's Mirror */}
          <div className="max-w-2xl mx-auto mt-8">
            <VarnikasMirror
              content={generateReflection().map((reflection, index) => (
                <div key={index} className="rounded-lg p-4 bg-white/20">
                  <p className="text-gray-700 text-sm text-center">{reflection}</p>
                </div>
              ))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
