import React from 'react';
import Markdown from 'markdown-to-jsx';
import Card from '@/components/Card';
import Pill, { PILL_TYPE } from '@/components/Pill';
import about from '@/data/about.json';
import experience from '@/data/experience.json';
import skills from '@/data/skills.json';

export default function Home() {
  return (
    <div className="flex flex-row flex-wrap justify-around">
      <div className=" h-[100vh] w-[100%] md:w-[50%] px-6 flex flex-col justify-center font-mono md:fixed left-0">
        <h1 className="text-2xl font-bold">{about.name}</h1>
        <h2 className="text-lg font-semi-bold">{about.title}</h2>
        <h3><Markdown>{about.blurb}</Markdown></h3>
      </div>

      <div className="w-[100%] md:w-[50%] p-6 md:absolute right-0">
        <div>
          {about.about.map((paragraph: string, i: number) => (
            <p key={i} className="text-justify"><Markdown>{paragraph}</Markdown></p> // eslint-disable-line react/no-array-index-key
          ))}
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
