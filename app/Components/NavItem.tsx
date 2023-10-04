import { Section } from '@/enums';
import React from 'react';

import ArrowRight from '../Assets/svg/arrowRight.svg';
interface INavItem {
  sectionDetail: Section;
}

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

export default function NavItem({ sectionDetail }: INavItem) {
  return (
    <a
      onClick={(e) => onPress(e)}
      href={`#${sectionDetail}`}
      data-to-scrollspy-id={sectionDetail}
      className='link_active text-lg flex gap-2 items-center'
    >
      <ArrowRight />
      <span className='uppercase transition-transform'> {sectionDetail}</span>
    </a>
  );
}
