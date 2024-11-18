import Markdown from 'markdown-to-jsx'
import Card from "@/components/Card";
import Pill, {PILL_TYPE} from "@/components/Pill";
import about from '@/data/about.json'
import experience from '@/data/experience.json'
import skills from '@/data/skills.json'

export default function Home() {
  return (
    <div className="flex flex-row flex-wrap justify-around">
      <div className="h-svh w-[100%] md:w-[50%] px-6 flex flex-col justify-center font-mono">
        <h1 className="text-2xl font-bold">{about.name}</h1>
        <h2 className="text-lg font-semi-bold">{about.title}</h2>
        <h3><Markdown>{about.blurb}</Markdown></h3>
      </div>

      <div className="h-svh w-[100%] md:w-[50%] px-6 overflow-scroll">
        <div className="pt-5">
          {about.about.map((paragraph: string, i: number) => <p key={i} className='text-justify'><Markdown>{paragraph}</Markdown></p>)}
        </div>

        <div>
          <h4 className="text-lg mt-10 font-mono mb-2">Skills</h4>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => {
              return <li><Pill name={skill.skill} type={skill.type}/></li>
            })}
          </ul>
        </div>

        <div>
          <h4 className="text-lg mt-10 font-mono mb-2">Experience</h4>
          {experience.map((exp) => <Card key={exp.employer} title={exp.employer} subtitle={exp.time} description={exp.description} />)}
        </div>
      </div>
    </div>
  );
}
