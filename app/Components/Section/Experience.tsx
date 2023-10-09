import { Section } from '@/enums';
import React from 'react';
import ExperienceExample, { IExperienceExample } from '../ExperienceExample';
import exp from 'constants';

const experiences: IExperienceExample[] = [
  {
    title: 'Frontend developer',
    date: '2022 DEC - 2023 AUG',
    listDescription: [
      'Complex web application',
      'Agile',
      'Responsibility for Frontend part',
      'Contact with client',
      'Working with whole team (FE, BE, Ui/UX, Testers, PM)',
    ],
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
    link: 'https://alterpage.pl/',
    company: 'Alter Page',
    listDescription: [
      'Complex webistes',
      'Langing pages',
      'Backend - frontend cooperation',
      'Bug fixing',
      'Contact with clients',
    ],
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
    link: 'https://bravenew.agency',
    listDescription: [
      'Complex websites',
      'Landing pages',
      'Bug fixing',
      'Sales',
      'Contact with client',
    ],
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
            listDescription={experience.listDescription}
            link={experience.link}
            company={experience.company}
            techStack={experience.techStack}
          />
        ))}
      </div>
    </div>
  );
}
