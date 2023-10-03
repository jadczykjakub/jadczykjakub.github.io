import { Section } from '@/enums';
import React from 'react';
import GithubIcon from '../../Assets/svg/github.svg';
import LinkedinIcon from '../../Assets/svg/linkedin.svg';

export default function Sidebar() {
  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split('#')[1]
    );
    if (target) {
      var elementPosition = target.getBoundingClientRect().top;

      window.scrollBy({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <div className='lg:sticky lg:top-0 lg:min-h-screen py-24 flex'>
        <div className='flex flex-col justify-between '>
          <div>
            <h1>Jakub Jadczyk</h1>
            <h2>Frontend developer</h2>
            <p>
              I have 3 years of experience in frontend development. Right now
              looking for new challenges.{' '}
            </p>

            <div className='hidden md:block'>
              <a onClick={(e) => onPress(e)} href={`#${Section.About}`}>
                <div data-to-scrollspy-id={Section.About} className='dupa'>
                  {Section.About}
                </div>
              </a>
              <a onClick={(e) => onPress(e)} href={`#${Section.Experience}`}>
                <div data-to-scrollspy-id={Section.Experience} className='dupa'>
                  {Section.Experience}
                </div>
              </a>
            </div>
          </div>

          <div className='flex gap-2 justify-center mt-6'>
            <GithubIcon /> <LinkedinIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
