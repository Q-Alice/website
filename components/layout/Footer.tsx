// Footer.tsx
import React from 'react';
import Link from 'next/link';

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer id='App:Footer' className="mx-auto px-2 sm:px-4 lg:px-8 bg-black  bottom-0 w-full shadow-md p-4">
      <div className="flex text-black justify-between">
        <p>&copy; {new Date().getFullYear().toString()} Qalice </p>
        <p>
          <Link 
            href="/terms"
            className="text-black underline hover:underline">Disclosure of Terms
          </Link>{' '}
        </p>
      </div>
    </footer>
  );
};

interface FooterProps {}

export default Footer;