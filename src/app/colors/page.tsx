import React from 'react';
import { FaGithubAlt } from 'react-icons/fa6';
import { PiLinkedinLogoBold } from 'react-icons/pi';
import Link from 'next/link';
import Card from '@/components/Card';
import Pill, { PILL_TYPE } from '@/components/Pill';
import about from '@/data/about.json';
import experience from '@/data/experience.json';
import skills from '@/data/skills.json';

export default function Home() {
  return (
    <div className=" h-[100vh] overflow-scroll bg-[linear-gradient(60deg,_#ff9904_50%,_#995bbf_50%)]">
      <div className="flex flex-col px-[10%] md:px-[20%] bg-[#ff9904] bg-clip-text text-[transparent] [filter:drop-shadow(1px_1px_#582f0e)]">
        <h1 className="text-2xl font-bold mt-32 font-mono">
          Well, hello there!
        </h1>
        <p className="text-lg font-semi-bold font-mono">
          I&apos;m
          {' '}
          {about.name}
          , a
          {' '}
          {about.title}
          {' '}
          living in NZ.
          {' '}
          Originally from Chile, I started my career in Santiago and then moved to Wellington to continue growing.
          {' '}
          I enjoy working both in frontend and backend on the web. I&apos;ve worked on a few desktop applications before too.
        </p>
        <p className="text-lg font-semi-bold font-mono">
          I spend most of my life in front of a computer. When I&apos;m not staring at a screen I like to crossstitch, taiko,
          {' '}
          play games by proxy, anime, and find new hobbies that require minimal effort.
        </p>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/denise-rivera-c/" className="text-[#ff9904] text-xl"><PiLinkedinLogoBold /></a>
            <a href="https://github.com/d-rivera-c" className="text-[#ff9904] text-xl"><FaGithubAlt /></a>
          </div>
          <div>
            <Link href="/" className="filter-none text-gray-300">Grayscale</Link>
          </div>
        </div>

        <div>
          <h4 className="text-lg mt-10 font-mono mb-2">Skills</h4>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => <li key={skill.skill}><Pill name={skill.skill} type={skill.type} /></li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-lg mt-10 font-mono mb-2">Experience</h4>
          {experience.map((exp) => {
            const jobSkills = exp.skills.map((skill) => (
              { name: skill, type: skills.find((s) => s.skill === skill)?.type || PILL_TYPE.LANGUAGE }
            ));
            return (
              <Card
                key={exp.employer}
                title={exp.employer}
                subtitle={exp.time}
                description={exp.description}
                pills={jobSkills}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
