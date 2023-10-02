import React from 'react';
import ScrollSpy from 'react-ui-scrollspy';

interface SectionWrapperProps {
  children: React.ReactNode;
}

export default function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <ScrollSpy
      activeClass='dupa'
      offsetBottom={100}
      scrollThrottle={80}
      useBoxMethod
    >
      {children}
    </ScrollSpy>
  );
}
