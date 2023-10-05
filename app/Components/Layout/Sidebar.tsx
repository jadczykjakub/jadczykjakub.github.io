import { Section } from '@/enums';
import React from 'react';
import GithubIcon from '../../Assets/svg/github.svg';
import LinkedinIcon from '../../Assets/svg/linkedin.svg';
import NavItem from '../NavItem';

export default function Sidebar() {
  return (
    <div>
      <div className='lg:sticky lg:top-0 lg:min-h-screen py-8 md:py-24 flex'>
        <div className='flex flex-col justify-between '>
          <div>
            <h1 className='text-4xl sm:text-5xl font-bold text-fontBright'>
              Jakub Jadczyk
            </h1>
            <h2 className='mt-3 text-xl sm:text-2xl font-bold text-fontBright'>
              Frontend developer
            </h2>
            <p className='mt-3'>
              I have 3 years of experience in frontend development. Right now
              looking for new challenges.{' '}
            </p>

            <div className='hidden md:block mt-6'>
              <NavItem sectionDetail={Section.About} />
              <NavItem sectionDetail={Section.Experience} />
              <NavItem sectionDetail={Section.Projects} />
            </div>
          </div>

          <div className='flex gap-2 justify-center mt-6'>
            <a
              href='https://github.com/jadczykjakub'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GithubIcon className={'hover:opacity-90 opacity-70'} />{' '}
            </a>
            <a
              href='https://www.linkedin.com/in/jakub-jadczyk-868371171'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedinIcon className='hover:opacity-90 opacity-70 ' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
