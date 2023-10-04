import React from 'react';
import ScrollSpy from 'react-ui-scrollspy';

interface SectionWrapperProps {
  children: React.ReactNode;
}

export default function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <div className='py-8 md:py-24'>
      <ScrollSpy
        activeClass='link_active'
        offsetBottom={100}
        scrollThrottle={80}
        useBoxMethod
      >
        {children}
      </ScrollSpy>
    </div>
  );
}
