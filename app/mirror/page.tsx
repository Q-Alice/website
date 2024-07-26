'use client';

import React, { useState, useEffect } from 'react';
import { generateQuantumExplanation } from '@/utilities/GenAI';

interface SectionProps {
  title: string;
  content: string;
  paragraphs?: string[];
  equations?: string[];
  images?: string[];
}

const QuantumMirrorPage: React.FC = () => {
  const [qasmFiles, setQasmFiles] = useState<string[]>([]);
  const [filename, setFilename] = useState<string>('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchQasmFiles = async () => {
      try {
        const response = await fetch('/api/qasm_files');
        const data = await response.json();
        setQasmFiles(data.files);
      } catch (error) {
        console.error("Error fetching QASM files:", error);
      }
    };
    fetchQasmFiles();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);  // Clear previous result
    try {
      const response = await fetch('/api/compile-and-run', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ filename }),
      });
      const data = await response.json();
      setResult(data);

      if (!data.error) {
        const explanation = await generateQuantumExplanation(
          data.counts,
          data.histogram,
          data.circuit_diagram
        );
        setResult((prevResult: any) => ({ ...prevResult, explanation }));
      }
    } catch (error) {
      console.error("Error running the quantum code:", error);
    }
    setLoading(false);
  };

  const sections: SectionProps[] = [
    {
      title: 'Introducing Qalice',
      content: 'Qalice is a cutting-edge project that integrates advanced quantum mechanics principles to maintain qubit superposition using a Quantum Mirror Memory setup.',
      paragraphs: [
        'Qalice combines Quantum Electrodynamics (QED), Laser Pulse Interaction (LPI), and Quantum Key Distribution (QKD) to achieve reliable and stable quantum information processing.',
        'The primary goal of Qalice is to overcome the challenges of decoherence and quantum noise, ensuring the long-term stability and coherence of qubits.',
        'Through precise control mechanisms and secure quantum communication channels, Qalice aims to revolutionize quantum computing and cryptography.',
      ],
    },
    {
      title: 'Understanding Quantum Mirroring',
      content: 'Quantum Mirroring is at the heart of Qalice, utilizing deformable mirrors to dynamically adjust and maintain the superposition state of qubits.',
      paragraphs: [
        'Deformable mirrors play a crucial role in preserving the coherence of qubits over time, enabling reliable quantum information storage and processing.',
        'Laser pulses are used to manipulate qubits with high precision, ensuring accurate state transitions and interactions.',
        'Quantum Key Distribution (QKD) ensures the secure transmission of quantum information, safeguarding against potential threats.',
      ],
      images: ['path_to_your_uploaded_image.png']
    },
    {
      title: 'Key Components of Qalice',
      content: '',
      paragraphs: [
        'Quantum Electrodynamics (QED): A quantum field theory that describes how light and matter interact, essential for understanding photon-qubit interactions.',
        'Laser Pulse Interaction (LPI): The study of laser pulse interactions with matter, crucial for manipulating and controlling qubit states.',
        'Quantum Key Distribution (QKD): A secure communication method using quantum mechanics principles to encrypt and transmit data, ensuring secure quantum information exchange.',
      ],
      equations: ['path_to_your_uploaded_equation_image.png']
    },
    {
      title: 'Goals and Objectives',
      content: 'The primary goal of Qalice is to achieve and maintain qubit superposition using the integrated principles of QED, LPI, and QKD.',
      paragraphs: [
        'Develop precise control mechanisms for laser pulses to manipulate qubits effectively.',
        'Implement secure quantum communication channels using QKD.',
        'Ensure the long-term stability and coherence of qubits in the Quantum Mirror Memory setup.',
        'Overcome challenges related to decoherence and quantum noise.',
      ],
    },
    {
      title: 'Applications and Future Directions',
      content: 'Qalice has the potential to revolutionize various fields, including quantum computing, quantum cryptography, and quantum networking.',
      paragraphs: [
        'Quantum Computing: Enhanced quantum information storage and processing capabilities.',
        'Quantum Cryptography: Improved methods for secure communication.',
        'Quantum Networking: Building robust quantum networks using secure and stable qubit transmission.',
        'Future Directions: Exploring scalability, optimization, and collaboration with other research institutions and companies to advance the technology and explore new applications.',
      ],
    },
  ];

  return (
    <div className="container mx-auto min-h-screen flex flex-col items-center py-12 px-4 md:px-8 lg:px-16">
      <form onSubmit={handleSubmit} className="w-full max-w-lg mb-8">
        <select 
          value={filename} 
          onChange={(e) => setFilename(e.target.value)}
          className="text-black p-2 border rounded mb-4 w-full"
        >
          <option value="">Select a QASM file</option>
          {qasmFiles.map(file => (
            <option key={file} value={file}>{file}</option>
          ))}
        </select>
        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded w-full"
          disabled={loading}
        >
          {loading ? 'Running...' : 'Run'}
        </button>
      </form>
      {result && (
        <div className="result-section w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Result:</h2>
          {result.error ? (
            <p className="text-red-500">{result.error}</p>
          ) : (
            <>
              <pre className="bg-gray-100 text-black p-4 rounded mb-4 overflow-x-auto">
                {JSON.stringify(result.counts, null, 2)}
              </pre>
              <h3 className="text-lg font-semibold mb-2">Histogram:</h3>
              {result.histogram && (
                <img 
                  src={`data:image/png;base64,${result.histogram}`} 
                  alt="Histogram" 
                  className="w-full md:w-1/2 mx-auto mb-4"
                />
              )}
              <h3 className="text-lg font-semibold mb-2">Circuit Diagram:</h3>
              {result.circuit_diagram && (
                <img 
                  src={`data:image/png;base64,${result.circuit_diagram}`} 
                  alt="Circuit Diagram" 
                  className="w-full md:w-1/2 mx-auto mb-4"
                />
              )}
              {result.explanation && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Explanation:</h3>
                  <p className="bg-gray-100 text-black p-4 rounded mb-4 overflow-x-auto">
                    {result.explanation}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      )}
      {sections.map((section, index) => (
        <div className="section w-full max-w-4xl mb-8" key={index}>
          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          <h4 className="text-lg mb-4">{section.content}</h4>
          {section.paragraphs && (
            <div>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
          {section.equations && (
            <div className="equations">
              {section.equations.map((equation, eIndex) => (
                <img 
                  key={eIndex} 
                  src={`/${equation}`} 
                  alt="Equation" 
                  className="w-full md:w-1/2 mx-auto mb-4"
                />
              ))}
            </div>
          )}
          {section.images && (
            <div className="images">
              {section.images.map((image, iIndex) => (
                <img 
                  key={iIndex} 
                  src={`/${image}`} 
                  alt="Image" 
                  className="w-full md:w-1/2 mx-auto mb-4"
                />
              ))}
            </div>
          )}
          {index !== 0 && (
            <hr className="my-8 border-t-2 border-gray-200" />
          )}
        </div>
      ))}
    </div>
  );
};

export default QuantumMirrorPage;
