import React from 'react';
import Arrow from '../Assets/svg/arrowRight.svg';

export default function ListItem({ text }: { text: string }) {
  return (
    <li className='flex gap-2'>
      <Arrow className={'w-2 mt-1 basis-auto'} />
      <span>{text}</span>
    </li>
  );
}
