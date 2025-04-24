'use client';

import React, { useState } from 'react';
import { getChatGPTResponse } from '@/utils/chatgpt';
import { getGeminiResponse } from '@/utils/gemini';

export default function DashboardPage() {
  // ChatGPT states
  const [message, setMessage] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Gemini states
  const [geminiMessage, setGeminiMessage] = useState('');
  const [geminiResponse, setGeminiResponse] = useState('');
  const [isGeminiLoading, setIsGeminiLoading] = useState(false);
  const [geminiError, setGeminiError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsLoading(true);
    setError('');
    try {
      const response = await getChatGPTResponse(message);
      setAiResponse(response);
    } catch (error) {
      console.error('Error:', error);
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
      setMessage('');
    }
  };

  const handleGeminiSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!geminiMessage.trim()) return;

    setIsGeminiLoading(true);
    setGeminiError('');
    try {
      const response = await getGeminiResponse(geminiMessage);
      setGeminiResponse(response);
    } catch (error) {
      console.error('Error:', error);
      setGeminiError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsGeminiLoading(false);
      setGeminiMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="h-16 bg-white shadow-sm flex items-center px-4">
        <div className="flex items-center">
          <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="ml-2 text-lg font-semibold text-gray-800">ChatApp</span>
        </div>
      </header> */}


      <div className="flex flex-1 overflow-hidden bg-gradient-to-b from-[#5275A9] to-[#E6DDE4]">
        {/* Left Navigation */}
        <nav className="w-16 bg-white shadow-sm">
          <div className="h-full flex flex-col items-center py-4 space-y-6">
            <button className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Welcome Message */}
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-700 text-center text-sm">Welcome to your dashboard! Start chatting...</p>
              </div>
            </div>
          </div>

          {/* ChatGPT Section */}
          <div className="border-t border-gray-200 p-3">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">ChatGPT</h3>
              <div className="bg-gray-50 rounded-md p-3 min-h-[100px] max-h-[200px] overflow-y-auto mb-3">
                {isLoading ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                  </div>
                ) : error ? (
                  <div className="text-red-500 text-sm p-2 bg-red-50 rounded">
                    {error}
                  </div>
                ) : (
                  <p className="text-gray-700 text-sm whitespace-pre-wrap">{aiResponse || 'ChatGPT response will appear here...'}</p>
                )}
              </div>
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask ChatGPT..."
                  className="flex-1 rounded-md border border-gray-300 px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isLoading}
                  suppressHydrationWarning
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                  suppressHydrationWarning
                >
                  {isLoading ? 'Sending...' : 'Send'}
                </button>
              </form>
            </div>
          </div>

          {/* Gemini Section */}
          <div className="border-t border-gray-200 p-3">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Gemini</h3>
              <div className="bg-gray-50 rounded-md p-3 min-h-[100px] max-h-[200px] overflow-y-auto mb-3">
                {isGeminiLoading ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                  </div>
                ) : geminiError ? (
                  <div className="text-red-500 text-sm p-2 bg-red-50 rounded">
                    {geminiError}
                  </div>
                ) : (
                  <p className="text-gray-700 text-sm whitespace-pre-wrap">{geminiResponse || 'Gemini response will appear here...'}</p>
                )}
              </div>
              <form onSubmit={handleGeminiSubmit} className="flex space-x-2">
                <input
                  type="text"
                  value={geminiMessage}
                  onChange={(e) => setGeminiMessage(e.target.value)}
                  placeholder="Ask Gemini..."
                  className="flex-1 rounded-md border border-gray-300 px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isGeminiLoading}
                  suppressHydrationWarning
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isGeminiLoading}
                  suppressHydrationWarning
                >
                  {isGeminiLoading ? 'Sending...' : 'Send'}
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 