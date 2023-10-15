import { Section } from '@/enums';
import React from 'react';
import ExperienceExample, { IExperienceExample } from '../ExperienceExample';

const projectExperienceExample: IExperienceExample[] = [
  {
    title: 'HCN',
    description:
      "Unfortunately I can't share the link to this project as it was an internal project. For nine months, I was an integral part of a significant project. We have created an advanced web application that replaced all the tools the company had previously used. During this time, I was responsible for creating the frontend part and gaining proficiency in the .NET environment. This experience also provided me with valuable insights into working in a truly agile methodology within a team consisting of around a dozen individuals",
    techStack: [
      'React',
      'Redux Toolkit',
      'Ant Design',
      'Typescript',
      '.Net',
      'SQL Server',
      'EF Core',
    ],
    img: '/hcn.png',
  },
  {
    title: 'Sdp',
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
    title: 'FCB&Themilkman',
    link: 'https://fcbandthemilkman.pl/',
    description:
      'I co-created this website while working at Alterpage company. The website has a diverse range of videos and animated sections, complemented by a dedicated blog segment. All content is managed through a custom CMS',
    techStack: ['Gatsby', 'Custom Backend CMS', 'Typescipt', 'Css Modules'],
    img: '/fcb.png',
  },
  {
    title: 'Nuuxe',
    description:
      'I made this website while working at Brave New Company. The site has many pages and lots of parts and templates that can be used again and again. The hardest part was keeping everything organized and making the code reusable as much as possible',
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
        It is a sample of projects I have been involved in, either creating from
        scratch or collaborating with the entire team.
      </p>

      <div className='grid gap-4 mt-8'>
        {projectExperienceExample.map((project, index) => (
          <ExperienceExample
            title={project.title}
            description={project.description}
            link={project.link}
            techStack={project.techStack}
            img={project.img}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
