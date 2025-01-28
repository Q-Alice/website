'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle button click
  const handleClick = () => {
    setIsLoading(true); // Set loading state to true
    // Simulate loading delay (replace with actual data fetching or navigation logic)
    setTimeout(() => {
      // Navigate to the home page after loading
      window.location.href = '/home'; // Change '/home' to the actual path of your home page
    }, 2000); // Adjust the delay as needed
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-black relative">
      {/* Background GIF */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <Image
          src="/background.gif" // Replace with the path to your GIF file
          alt="Background GIF"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="z-10 flex flex-col items-center">
        {/* Company Logo */}
        <div className="mb-4">
          <Image
            src="/whitelogo.png" // Replace with the path to your company logo
            alt="Company Logo"
            width={300} // Adjust width as needed
            height={300} // Adjust height as needed
          />
        </div>

        {/* Company Phrase */}
        <h2 className="text-white text-lg mb-6">Journeying Through the Quantum Glass</h2>

        {/* Announcement Section */}
        <div className="bg-white text-center bg-opacity-80 text-black p-6 rounded-lg mb-6 max-w-md shadow-lg">
          <h3 className="text-xl font-bold mb-2">🚀 V2 Updates Underway</h3>
          <p className="text-sm mb-4">
            We're thrilled to announce that V2 is in progress, bringing cutting-edge advancements and an improved experience. Stay tuned for updates!
          </p>
          <h3 className="text-xl font-bold mb-2">✨ Qalice Labs: Coming Soon</h3>
          <p className="text-sm mb-4">
            Introducing <strong>Qalice Labs</strong>, a hub for innovation and experimentation in the quantum space. 
            <a 
              href="https://www.linkedin.com/posts/qalice_qalice-labratory-activity-7287992498730217472-hveR/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
            >
              Learn more
            </a>.
          </p>
        </div>

        {/* Enter Button with loading state */}
        <button 
          className="bg-white text-black py-2 px-4 rounded-lg text-lg font-bold hover:bg-gray-200 transition duration-300"
          onClick={handleClick} // Call handleClick function on button click
          disabled={isLoading} // Disable button when loading
        >
          {isLoading ? 'Loading...' : 'Enter V1'}
        </button>
      </div>
    </main>
  );
}
