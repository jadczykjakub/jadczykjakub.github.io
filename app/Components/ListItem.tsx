import React from 'react';
import Arrow from '../Assets/svg/arrowRight.svg';

export default function ListItem({ text }: { text: string }) {
  return (
    <li className='flex gap-2 items-center'>
      <Arrow className={'w-2'} />
      <span>{text}</span>
    </li>
  );
}
