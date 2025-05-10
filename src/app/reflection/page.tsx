'use client';
import React, { useState } from 'react';
import { Knob } from 'primereact/knob';
import BasicKnob from './knob';

const DesignPage: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#f8f5f0' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2em', fontWeight: 'bold', color: '#333' }}>Your Decision Reflection</h1>
        <p style={{ fontSize: '1.1em', color: '#555' }}>A personalized mirror of your journey and instincts</p>
      </div>

      <div style={{ backgroundColor: '#fffbf5', padding: '30px', borderRadius: '10px', marginBottom: '40px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <p style={{ fontSize: '1.1em', lineHeight: '1.6', color: '#333' }}>
          Your aspiration for an MBA shines brightly, balanced with careful financial instinct. The desire to grow outweighs your fear of missing out—a promising sign.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '40px' }}>
        <div style={{ width: '45%' }}>
          <h2 style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>Decision Factors</h2>
          <div>
            <p>Financial Readiness</p>
            {/* Placeholder for progress bar */}
            <div style={{ height: '10px', backgroundColor: '#eee', borderRadius: '5px', marginBottom: '15px' }}>
              <div style={{ width: '70%', height: '100%', backgroundColor: '#d4c1a5', borderRadius: '5px' }}></div>
            </div>
            <p>Career Alignment</p>
            {/* Placeholder for progress bar */}
            <div style={{ height: '10px', backgroundColor: '#eee', borderRadius: '5px', marginBottom: '15px' }}>
              <div style={{ width: '80%', height: '100%', backgroundColor: '#d4c1a5', borderRadius: '5px' }}></div>
            </div>
            <p>Emotional Readiness</p>
            {/* Placeholder for progress bar */}
            <div style={{ height: '10px', backgroundColor: '#eee', borderRadius: '5px', marginBottom: '15px' }}>
              <div style={{ width: '60%', height: '100%', backgroundColor: '#d4c1a5', borderRadius: '5px' }}></div>
            </div>
            <p>Timing Foresight</p>
            {/* Placeholder for progress bar */}
            <div style={{ height: '10px', backgroundColor: '#eee', borderRadius: '5px', marginBottom: '15px' }}>
              <div style={{ width: '75%', height: '100%', backgroundColor: '#d4c1a5', borderRadius: '5px' }}></div>
            </div>
            <p>Personal Confidence</p>
            {/* Placeholder for progress bar */}
            <div style={{ height: '10px', backgroundColor: '#eee', borderRadius: '5px', marginBottom: '15px' }}>
              <div style={{ width: '90%', height: '100%', backgroundColor: '#d4c1a5', borderRadius: '5px' }}></div>
            </div>
          </div>
        </div>
        <div style={{ width: '45%' }}>
          <h2 style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>Your Inner Compass</h2>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ textAlign: 'center' }}>
              <BasicKnob />    
              <p>Desire to Grow</p>
              <p style={{ fontWeight: 'bold' }}>Moderate</p>
            </div>
            <div style={{ textAlign: 'center' }}>
            <BasicKnob />
              <p>FOMO</p>
              <p style={{ fontWeight: 'bold' }}>High</p>
            </div>
            <div style={{ textAlign: 'center' }}>
            <BasicKnob />
              <p>Need for Stability</p>
              <p style={{ fontWeight: 'bold' }}>High</p>
            </div>
            <div style={{ textAlign: 'center' }}>
            <BasicKnob />
              <p>Risk Appetite</p>
              <p style={{ fontWeight: 'bold' }}>Moderate</p>
            </div>
            <div style={{ textAlign: 'center' }}>
            <BasicKnob />
              <p>Security Seeking</p>
              <p style={{ fontWeight: 'bold' }}>Long</p>
            </div>
          </div>
        </div>
      </div>

      <h2 style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>Scenario Snapshots</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '40px' }}>
        <div style={{ backgroundColor: '#fffbf5', padding: '20px', borderRadius: '10px', width: '30%', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Proceed Now</h3>
          <p>Earlier rewards but financial stretch</p>
        </div>
        <div style={{ backgroundColor: '#fffbf5', padding: '20px', borderRadius: '10px', width: '30%', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Delay 1 Year</h3>
          <p>More savings, but miss market peak</p>
        </div>
        <div style={{ backgroundColor: '#fffbf5', padding: '20px', borderRadius: '10px', width: '30%', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Pivot Career</h3>
          <p>Fresh start, but uncertain path</p>
        </div>
      </div>

      <h2 style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>Story Spotlight</h2>
      <div style={{ backgroundColor: '#fffbf5', padding: '20px', borderRadius: '10px', marginBottom: '40px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <div>
            <h3 style={{ fontWeight: 'bold' }}>Ayush's Dilemma</h3>
            <p>Facing doubts</p>
          </div>
          <p style={{ fontSize: '1.1em', color: '#333' }}>Facing doubts about ROI. Ayush delayed his MBA and invested in upskiting.</p>
          {/* Placeholder for arrow icon */}
          <span>&gt;</span>
        </div>
        {/* Placeholder for input field */}
        <input
          type="text"
          placeholder="If fear wasn't a factor, what would you pick today?"
          style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#d4c1a5', color: '#333', cursor: 'pointer' }}>
          Save Reflection
        </button>
        <button style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#d4c1a5', color: '#333', cursor: 'pointer' }}>
          Explore More
        </button>
        <button style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#d4c1a5', color: '#333', cursor: 'pointer' }}>
          Return to Dashboard
        </button>
      </div>
    </div>
  );
};

export default DesignPage;
