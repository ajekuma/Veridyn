'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Option {
  id: number;
  title: string;
  pros: string[];
  cons: string[];
  emotionalImpact: string;
}

export default function EvaluationPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const options: Option[] = [
    {
      id: 1,
      title: "Quit current job and pursue an MBA",
      pros: ["Expand career options", "international exposure"],
      cons: ["Financial strain", "2-year career gap"],
      emotionalImpact: "Excited but anxious"
    },
    {
      id: 2,
      title: "Stay and seek growth internally",
      pros: ["Stability", "no debt", "possible internal promotion"],
      cons: ["Risk of stagnation", "no major network expansion"],
      emotionalImpact: "Safe but uninspired"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#90a5d8] to-[#dbe4ee] p-8">
      {/* Varnika Branding */}
      <div className="max-w-4xl mx-auto mb-12 flex flex-col items-center">
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

      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {/* Main Evaluation Box */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <div className="mb-8">
            <h2 className="text-xl text-gray-800 mb-2">Step {currentStep} of {totalSteps}: Evaluate Your Decision</h2>
            <p className="text-gray-600">Let's look at your options and what might unfold.</p>
          </div>

          {/* Options */}
          <div className="space-y-8">
            {options.map((option) => (
              <div key={option.id} className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-xl">⚖️</span>
                  Option {option.id}: {option.title}
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="font-medium mb-1">Pros:</p>
                    <ul className="list-disc list-inside pl-4">
                      {option.pros.map((pro, index) => (
                        <li key={index}>{pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Cons:</p>
                    <ul className="list-disc list-inside pl-4">
                      {option.cons.map((con, index) => (
                        <li key={index}>{con}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Emotional impact:</p>
                    <p className="pl-4">{option.emotionalImpact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Alternative Suggestions */}
          <div className="mt-8">
            <p className="text-gray-800 mb-4">Would you like to explore a hybrid or unexpected path?</p>
            <button className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-gray-700 rounded-lg transition-colors flex items-center justify-center gap-2">
              <span>🧭</span>
              Show Alternative Suggestions
            </button>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => router.back()}
              className="px-6 py-2 bg-accent text-white rounded-full hover:bg-accent-foreground hover:text-accent transition-colors"
            >
              ← Back
            </button>
            <button
              onClick={() => setCurrentStep(prev => Math.min(prev + 1, totalSteps))}
              className="px-6 py-2 bg-accent text-white rounded-full hover:bg-accent-foreground hover:text-accent transition-colors"
            >
              Continue →
            </button>
          </div>
        </div>

        {/* Varnika's Mirror */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h3 className="text-xl text-gray-800 mb-6 flex items-center gap-2">
            <span>🌱</span>
            Varnika's Mirror
          </h3>
          <div className="space-y-6 text-gray-700">
            <div>
              <p className="flex items-center gap-2 mb-2">
                <span>🌟</span>
                <span className="font-medium">Your decision:</span>
              </p>
              <p className="pl-6">"Consider an MBA abroad"</p>
            </div>
            <div>
              <p className="flex items-center gap-2 mb-2">
                <span>🔍</span>
                <span className="font-medium">We're now evaluating:</span>
              </p>
              <ul className="list-none pl-6 space-y-1">
                <li>- Career impact</li>
                <li>- Personal motivation</li>
                <li>- Financial & emotional cost</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
