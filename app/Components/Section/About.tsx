import { Section } from '@/enums';
import React from 'react';

export default function About() {
  return (
    <div id={Section.About} className='bg-blue  h-screen'>
      <p>About</p>
    </div>
  );
}
