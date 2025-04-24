'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  name: string;
  age: string;
  gender: string;
  country: string;
  city: string;
  personalityType: string[];
  pastDecisions: string;
  problemStatement: string;
  financialState: string;
  presentMindset: string;
}

export default function InfoPage() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    // Personal Information
    name: '',
    age: '',
    gender: '',
    country: '',
    city: '',
    // Mindset Profile
    personalityType: [],
    // Past Decisions
    pastDecisions: '',
    // Current Situation
    problemStatement: '',
    financialState: '',
    presentMindset: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      personalityType: prev.personalityType.includes(value)
        ? prev.personalityType.filter(type => type !== value)
        : [...prev.personalityType, value]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you can add the logic to send the data to your backend
    router.push('/dashboard');
  };

  const handleNext = () => {
    if (currentTab < 4) {
      setCurrentTab(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentTab > 1) {
      setCurrentTab(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#90a5d8] to-[#dbe4ee] p-8">
      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/30 -translate-y-1/2"></div>
          <div className="relative flex justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step <= currentTab ? 'bg-accent text-white' : 'bg-white/30 text-white'
                } relative z-10`}
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8">
        <form onSubmit={handleSubmit}>
          {/* Tab 1: Personal Information */}
          {currentTab === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/70 border border-white/20"
                />
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/70 border border-white/20"
                />
                <input
                  type="text"
                  name="gender"
                  placeholder="Gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/70 border border-white/20"
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/70 border border-white/20"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/70 border border-white/20"
                />
              </div>
            </div>
          )}

          {/* Tab 2: Mindset Profile */}
          {currentTab === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Mindset Profile</h2>
              <div className="space-y-4">
                {['Risk Taker', 'Moderate', 'Aggressive', 'Conservative', 'Analytical', 'Intuitive'].map((type) => (
                  <label key={type} className="flex items-center space-x-3 text-white">
                    <input
                      type="checkbox"
                      checked={formData.personalityType.includes(type)}
                      onChange={() => handleCheckboxChange(type)}
                      className="w-4 h-4"
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Past Decisions */}
          {currentTab === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Past Decisions</h2>
              <textarea
                name="pastDecisions"
                placeholder="Tell us about your previous important decisions..."
                value={formData.pastDecisions}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/70 border border-white/20"
              />
            </div>
          )}

          {/* Tab 4: Current Situation */}
          {currentTab === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Current Situation</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Problem Statement</h3>
                  <textarea
                    name="problemStatement"
                    placeholder="Describe your current problem or decision..."
                    value={formData.problemStatement}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/70 border border-white/20"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Financial State</h3>
                  <textarea
                    name="financialState"
                    placeholder="Describe your current financial situation..."
                    value={formData.financialState}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/70 border border-white/20"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Present Mindset</h3>
                  <textarea
                    name="presentMindset"
                    placeholder="Describe your current state of mind..."
                    value={formData.presentMindset}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/70 border border-white/20"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {currentTab > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="px-6 py-2 bg-accent text-white rounded-full hover:bg-accent-foreground hover:text-accent transition-colors"
              >
                ← Previous
              </button>
            )}
            {currentTab < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2 bg-accent text-white rounded-full hover:bg-accent-foreground hover:text-accent transition-colors ml-auto"
              >
                Next →
              </button>
            ) : null
            // (
            //   <button
            //     type="submit"
            //     className="px-6 py-2 bg-accent text-white rounded-full hover:bg-accent-foreground transition-colors ml-auto"
            //   >
            //     Submit
            //   </button>
            // )
            }
          </div>
        </form>
      </div>
    </div>
  );
}
