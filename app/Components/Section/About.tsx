import { Section } from '@/enums';
import React from 'react';

export default function About() {
  return (
    <div id={Section.About}>
      <h4 className='text-xl text-fontBright font-bold '>About me</h4>
      <p className='mt-2'>
        I began my journey in IT as a project manager in{' '}
        <span className='text-fontBright'> 2019</span>, but I quickly realized
        that coding brings me more satisfaction. I put in a lot of effort to
        catch up, and within six months at the same company, I started working
        as a frontend developer.
      </p>
      <p className='mt-2'>
        Since then, I have been involved in software development at two
        <span className='text-fontBright'> advertisement agencies </span>
        and <span className='text-fontBright'> software house</span>. These
        days, my focus is on frontend development, but I am open to learning new
        technologies.
      </p>
      <p className='mt-2'>
        I am a very social person and I have always enjoyed{' '}
        <span className='text-fontBright'>working with client</span>. Besides my
        technical skills, I am also working on improving my soft skills to
        enhance my effectiveness in client interactions. I have a passion for
        foreign languages and am currently learning
        <span className='text-fontBright'> German</span>.
      </p>
    </div>
  );
}
