'use client';
import React, { useEffect, useState } from 'react';
import { Knob } from 'primereact/knob';

const dummyUserId = 'user123';
const phase = 'reflection';
const userInput = 'my biggest fear when making important decisions is the possibility of overlooking long-term consequences in pursuit of short-term gains.Every major decision—whether it\'s a strategic pivot, a product launch, or a key hire—carries ripple effects across people, culture, and future growth. I fear that despite data and due diligence, some variables may remain hidden: market shifts, internal misalignment, or unintended impact on our core values. That uncertainty is humbling. But I also believe that fear, when acknowledged, sharpens clarity. It pushes us to test our assumptions, stress-test scenarios, and stay grounded in our mission while being agile in execution.';
const ReflectionPage: React.FC = () => {
  interface ReflectionData {
    summaryReflection: string;
    decisionFactors: Record<string, number>;
    innerCompass: Record<string, number>;
    ScenarioSnapshot: { heading: string; text: string }[];
    decisionProblem: string;
  }

  const [reflectionData, setReflectionData] = useState<ReflectionData | null>(null);

  useEffect(() => {
    const fetchReflectionData = async () => {
      try {
        const response = await fetch('/api/handleVarnikaRequest', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        //   body: JSON.stringify({ phase: 'reflection' }),
        body: JSON.stringify({ phase, userInput: userInput, userId: dummyUserId })
        });
        const data = await response.json();
        if (data.success) {
          const rawResult = data.result;
          const cleanedResult = rawResult.replace(/^```json\n|\n```$/g, ''); // Remove "```json" and "```" from the result
          const parsedResult = JSON.parse(cleanedResult);
          if (parsedResult && typeof parsedResult === 'object') {
            setReflectionData(parsedResult.result);
          } else {
            console.error('Parsed reflection data is invalid:', parsedResult);
            throw new Error('Parsed reflection data is invalid');
          }
        }
      } catch (error) {
        console.error('Error fetching reflection data:', error);
      }
    };

    fetchReflectionData();
  }, []);

  if (!reflectionData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-b from-[#5275A9] to-[#E6DDE4]" style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2em', fontWeight: 'bold', color: '#333' }}>Your Decision Reflection</h1>
        <p style={{ fontSize: '1.1em', color: '#555' }}>A personalized mirror of your journey and instincts</p>
      </div>

      <div style={{ padding: '30px', borderRadius: '10px', marginBottom: '40px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <p style={{ fontSize: '1.1em', lineHeight: '1.6', color: '#333' }}>
          {reflectionData.summaryReflection}
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '40px' }}>
        <div style={{ width: '45%' }}>
          <h2 style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>Decision Factors</h2>
          {Object.entries(reflectionData.decisionFactors ?? {}).map(([key, value]) => (
            <div key={key}>
              <p>{key.replace(/_/g, ' ')}</p>
              <div style={{ height: '10px', backgroundColor: '#eee', borderRadius: '5px', marginBottom: '15px' }}>
                <div style={{ width: `${value * 10}%`, height: '100%', backgroundColor: '#d4c1a5', borderRadius: '5px' }}></div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ width: '45%' }}>
          <h2 style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>Your Inner Compass</h2>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {Object.entries(reflectionData.innerCompass ?? {}).map(([key, value]) => (
              <div key={key} style={{ textAlign: 'center' }}>
                <Knob value={value} min={0} max={10} />
                <p>{key}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2 style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>Scenario Snapshots</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '40px' }}>
        {reflectionData.ScenarioSnapshot.map((snapshot: any, index: number) => (
          <div key={index} style={{ padding: '20px', borderRadius: '10px', width: '30%', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>{snapshot.heading}</h3>
            <p>{snapshot.text}</p>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>Decision Problem</h2>
      <div style={{ padding: '20px', borderRadius: '10px', marginBottom: '40px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <p>{reflectionData.decisionProblem}</p>
      </div>
    </div>
  );
};

export default ReflectionPage;
