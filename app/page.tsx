'use client';
import ScrollSpy from 'react-ui-scrollspy';
import { useRef } from 'react';
import Sidebar from './Components/Sidebar';

export default function Home() {
  const parentScrollContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <main>
      <div>
        <div ref={parentScrollContainerRef} className='flex'>
          <div className='w-28 '>
            <div className='fixed top-0'>
              <Sidebar />
            </div>
          </div>
          <div className='flex-grow overflow-y-auto'>
            <ScrollSpy
              activeClass='dupa'
              offsetBottom={100}
              scrollThrottle={80}
              useBoxMethod
            >
              <div id='section-1' className='bg-black  h-screen'>
                <p>Section 1</p>
              </div>
              <div id='section-2' className='bg-blue  h-screen'>
                <p>Section 2</p>
              </div>
              <div id='section-3' className='bg-pink  h-screen'>
                <p>Section 3</p>
              </div>
            </ScrollSpy>
          </div>
        </div>
      </div>
    </main>
  );
}
