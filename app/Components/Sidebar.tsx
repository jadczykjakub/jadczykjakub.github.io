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
    <div className=''>
      <a onClick={(e) => onPress(e)} href={'#section-1'}>
        <div
          style={{ textAlign: 'center' }}
          data-to-scrollspy-id='section-1'
          className='dupa '
        >
          Section 99999
        </div>
      </a>
      <a onClick={(e) => onPress(e)} href={'#section-2'}>
        <div data-to-scrollspy-id='section-2' className='dupa text-center'>
          Section 2
        </div>
      </a>
      <a onClick={(e) => onPress(e)} href={'#section-3'}>
        <div data-to-scrollspy-id='section-3' className='dupa text-center'>
          Section 3
        </div>
      </a>
    </div>
  );
}
