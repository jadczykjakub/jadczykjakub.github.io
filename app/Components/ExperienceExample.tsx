import React from 'react';
import ArrowUpRight from '../Assets/svg/ArrowUpRight.svg';
import Image from 'next/image';

export interface IExperienceExample {
  title: string;
  company?: string;
  description: string;
  techStack: string[];
  date?: string;
  link: string;
  img?: string;
}

export default function ExperienceExample(props: IExperienceExample) {
  return (
    <a
      href={props.link}
      className='hover:bg-decorationLight block p-2 rounded-md group'
      target='_blank'
    >
      <div className='flex gap-2'>
        <div className='basis-1/4'>
          {props?.img && (
            <Image
              src={props.img}
              alt=''
              width={130}
              height={100}
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
              }}
            />
          )}
          {props?.date && <p className='text-xs leading-6'>{props.date}</p>}
        </div>
        <div className='basis-3/4 grid gap-2'>
          <h5 className='flex items-center gap-1'>
            <span className='text-fontBright'>{props.title}</span>
            <ArrowUpRight className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ' />
          </h5>
          {props.company && <p>{props.company}</p>}
          <p>{props.description}</p>

          <div className='flex flex-wrap gap-2 mt-2'>
            {props.techStack?.map((item, index) => (
              <div
                className='bg-decorationLight py-1 px-2 rounded-full group-hover:bg-body transition-colors'
                key={index}
              >
                <span className='text-decoration text-sm'>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
