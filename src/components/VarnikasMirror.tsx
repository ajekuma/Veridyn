// Created a reusable VarnikasMirror component
import React from 'react';

interface VarnikasMirrorProps {
  content: React.ReactNode;
}

const VarnikasMirror: React.FC<VarnikasMirrorProps> = ({ content }) => (
  <div className="max-w-2xl mx-auto mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-md" style={{ minHeight: '200px', overflow: 'auto' }}>
    <h4 className="text-lg text-gray-800 mb-6 text-center font-medium">Varnika's Mirror</h4>
    <div className="space-y-4">
      {content}
    </div>
  </div>
);

export default VarnikasMirror;