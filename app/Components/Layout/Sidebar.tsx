import { Section } from '@/enums';
import React from 'react';

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
      <div className='fixed top-0'>
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
  );
}
