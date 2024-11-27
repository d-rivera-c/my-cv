import React from 'react';
import Pill, { PillType } from './Pill';

type CardType = {
  theme?: string,
  title: string,
  subtitle: string,
  description: string,
  pills: PillType[] | null
}

export default function Card({
  theme, title, subtitle, description, pills,
}: CardType) {
  return (
    <div className="flex flex-row mb-8">
      <div className="w-[30%] pr-8">
        <h5 className="text-xs uppercase">{subtitle}</h5>
      </div>
      <div className="w-[70%]">
        <h4 className="uppercase font-bold leading-none">{title}</h4>

        <p className="text-justify">{description}</p>

        {pills
          && (
            <div className="flex flex-wrap gap-2">
              {pills.map((pill: PillType) => <Pill key={pill.name} theme={theme} name={pill.name} type={pill.type} />)}
            </div>
          )}
      </div>
    </div>
  );
}
