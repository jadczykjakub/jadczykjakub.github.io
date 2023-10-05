'use client';
import Sidebar from './Components/Layout/Sidebar';
import SectionWrapper from './Components/Layout/Section';
import About from './Components/Section/About';
import Experience from './Components/Section/Experience';
import Projects from './Components/Section/Projects';

export default function Home() {
  return (
    <main>
      <div className='flex justify-center'>
        <div className='grid md:grid-cols-layout gap-4 md:gap-16 px-4  md:px-8 lg:px-24  max-w-7xl '>
          <Sidebar />
          <SectionWrapper>
            <About />
            <Experience />
            <Projects />
          </SectionWrapper>
        </div>
      </div>
    </main>
  );
}
