import { Section } from '@/enums';
import React from 'react';
import ExperienceExample, { IExperienceExample } from '../ExperienceExample';

const experiences: IExperienceExample[] = [
  {
    title: 'Frontend developer',
    date: '2022 DEC - 2023 AUG',
    description: 'I was working as a sadasdasdasda',
    link: 'https://www.freeportmetrics.com/',
    company: 'Freeport Metrics',
    techStack: [
      'React',
      'Redux',
      'Ant Design',
      'Tailwind',
      '.Net',
      'SQL Server',
      'Entity Framework',
      'Agile',
    ],
  },
  {
    title: 'Junior Frontend Developer',
    date: '2022 MAR - 2022 NOV',
    description: 'I was working as a sadasdasdasda',
    link: 'https://alterpage.pl/',
    company: 'Alter Page',
    techStack: [
      'React',
      'Gatsby',
      'TypeScript',
      'Strapi',
      'GraphQL',
      'Git',
      'Figma',
      'Atomic Design',
    ],
  },
  {
    title: 'Junior Frontend Developer',
    date: '2020 DEC - 2022 FEB',
    description: 'I was working as a sadasdasdasda',
    link: 'https://bravenew.agency',
    company: 'Brave New',
    techStack: [
      'JavaScript',
      'Html',
      'Css',
      'WordPress',
      'Sage',
      'Git',
      'Php',
      'Photoshop',
      'Adobe XD',
    ],
  },
];

export default function Experience() {
  return (
    <div id={Section.Experience} className='mt-8'>
      <h4 className='text-xl text-fontBright font-bold '>Experience</h4>
      <div className='grid gap-4 mt-4'>
        {experiences.map((experience) => (
          <ExperienceExample
            title={experience.title}
            date={experience.date}
            description={experience.description}
            link={experience.link}
            company={experience.link}
            techStack={experience.techStack}
          />
        ))}
      </div>
    </div>
  );
}
