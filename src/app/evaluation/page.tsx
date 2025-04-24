'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export default function EvaluationPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<{
    decisionStyle: string;
    strengths: string[];
    areasForGrowth: string[];
    recommendations: string[];
  } | null>(null);

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Mock analysis data
        setAnalysis({
          decisionStyle: "Analytical and Methodical",
          strengths: [
            "Strong logical reasoning",
            "Good at gathering information",
            "Considers multiple perspectives"
          ],
          areasForGrowth: [
            "Trusting intuition more",
            "Handling uncertainty better",
            "Making decisions faster"
          ],
          recommendations: [
            "Practice making quick decisions in low-stakes situations",
            "Try meditation to improve intuition",
            "Set time limits for decision-making"
          ]
        });
        setIsLoading(false);
      } catch (err) {
        setError('Failed to analyze your decision-making style. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchAnalysis();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#90a5d8] to-[#dbe4ee] flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg
              className="w-10 h-10 text-white animate-spin"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Analyzing your decision-making style...</h2>
          <p className="text-gray-600 mt-2">This may take a few moments</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#90a5d8] to-[#dbe4ee] flex flex-col items-center justify-center p-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
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
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Error</h2>
          <p className="text-gray-600 mt-2">{error}</p>
          <button
            onClick={() => router.push('/onboarding')}
            className="mt-4 px-6 py-2 bg-accent text-white rounded-full hover:bg-accent-foreground hover:text-accent transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#90a5d8] to-[#dbe4ee] flex flex-col">
      {/* Varnika Branding */}
      <div className="max-w-2xl mx-auto mb-12 mt-8 flex flex-col items-center">
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

      {/* Analysis Results */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-2xl text-gray-800 mb-6 text-center">Your Decision-Making Analysis</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Decision Style</h3>
              <p className="text-gray-700">{analysis?.decisionStyle}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Strengths</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {analysis?.strengths.map((strength, index) => (
                  <li key={index}>{strength}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Areas for Growth</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {analysis?.areasForGrowth.map((area, index) => (
                  <li key={index}>{area}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Recommendations</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {analysis?.recommendations.map((recommendation, index) => (
                  <li key={index}>{recommendation}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Varnika's Mirror */}
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
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Varnika's Mirror</h2>
        <p className="text-sm text-gray-600 mb-6">Reflecting on Your Journey</p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 w-full">
          <div className="space-y-4">
            <p className="text-gray-700 text-center">
              Your decision-making style reflects a thoughtful and analytical approach. 
              While you excel at logical reasoning and gathering information, 
              there's room to grow in trusting your intuition and handling uncertainty.
            </p>
            <p className="text-gray-700 text-center">
              Remember, the best decisions often come from balancing both analysis and intuition.
              Take time to practice the recommendations provided, and you'll see improvement
              in your decision-making confidence and effectiveness.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-2xl mx-auto mb-12 flex justify-center">
        <button
          onClick={() => router.push('/dashboard')}
          className="px-6 py-2 bg-accent text-white rounded-full hover:bg-accent-foreground hover:text-accent transition-colors"
        >
          Continue to Dashboard
        </button>
      </div>
    </div>
  );
}
