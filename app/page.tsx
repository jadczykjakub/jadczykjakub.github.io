'use client';
import Sidebar from './Components/Layout/Sidebar';
import SectionWrapper from './Components/Layout/Section';
import About from './Components/Section/About';
import Experience from './Components/Section/Experience';

export default function Home() {
  return (
    <main>
      <div>
        <div className='grid md:grid-cols-layout gap-16 px-4 md:px-8 lg:px-24 '>
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
