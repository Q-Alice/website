
import { Metadata } from 'next'
import * as React from 'react'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Quantum Mirroring',
  description: 'Accelerating Computations and Communications',
}

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-grow'>
        <Header />
        <main className='flex flex-col max-w-7xl px-2 sm:px-4 lg:px-8 mx-auto my-0 py-4'>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
