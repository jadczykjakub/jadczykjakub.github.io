import { Section } from '@/enums';
import React from 'react';
import ExperienceExample, { IExperienceExample } from '../ExperienceExample';

const projectExperienceExample: IExperienceExample[] = [
  {
    title: 'Sdp.legal',
    description:
      'I made the website from scratch, designing it myself and then writing all the code. The website can be used in different languages, and it has many connected sections in the CMS Strapi to keep everything well-organized.',
    link: 'https://sdp.legal/',
    techStack: [
      'Gatsby',
      'Strapi',
      'Css Modules',
      'GraphQL',
      'TypeScript',
      'Atomic Design',
    ],
    img: '/sdp.png',
  },
  {
    title: 'Nuuxe',
    description:
      'I made this website while working at Brave New Company.  The site has many pages and lots of parts and templates that can be used again and again. The hardest part was keeping everything organized and making the code reusable as much as possible',
    link: 'https://www.nuuxe.com/',
    techStack: ['JavaScript', 'Html', 'Sage WordPress MVC framework', 'Scss'],
    img: '/nuuxe.png',
  },
];

export default function Projects() {
  return (
    <div id={Section.Projects} className='mt-8'>
      <h4 className='text-xl text-fontBright font-bold '>Projects</h4>
      <p className='mt-2'>
        There are two projects that I have created from scratch. Of course I
        have created much more but I can't use them as an example in my
        portfolio.
      </p>

      <div className='grid gap-4 mt-8'>
        {projectExperienceExample.map((project) => (
          <ExperienceExample
            title={project.title}
            description={project.description}
            link={project.link}
            techStack={project.techStack}
            img={project.img}
          />
        ))}
      </div>
    </div>
  );
}
