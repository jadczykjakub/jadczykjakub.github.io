'use client';
import { useRef } from 'react';
import Sidebar from './Components/Layout/Sidebar';
import SectionWrapper from './Components/Layout/Section';
import About from './Components/Section/About';
import Experience from './Components/Section/Experience';

export default function Home() {
  // const parentScrollContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <main>
      <div>
        <div className='grid md:grid-cols-layout'>
          <Sidebar />
          <SectionWrapper>
            <About />
            <Experience />
          </SectionWrapper>
        </div>
      </div>
    </main>
  );
}
