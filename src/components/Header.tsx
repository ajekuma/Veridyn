'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginDialog from './LoginDialog';

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">ChatApp</h1>
          </div>
          
          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsLoginOpen(true)}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Login
            </button>
            <button 
              onClick={() => router.push('/signup')}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <LoginDialog isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </header>
  );
} 