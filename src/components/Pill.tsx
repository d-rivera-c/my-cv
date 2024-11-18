import React from 'react';

export enum PILL_TYPE {
  LANGUAGE = 'LANGUAGE', // eslint-disable-line no-unused-vars
  FRAMEWORK = 'FRAMEWORK', // eslint-disable-line no-unused-vars
  SOFT = 'SOFT' // eslint-disable-line no-unused-vars
}

export type PillType = {
  name: string,
  type: string,
  // level - strength
}

export default function Pill({ name, type }: PillType) {
  // let typeColor = 'bg-purple-400'
  let typeColor = 'bg-gray-400';
  switch (type) {
    case PILL_TYPE.LANGUAGE: {
      // typeColor = 'bg-pink-400';
      typeColor = 'bg-gray-300';
      break;
    }
    case PILL_TYPE.SOFT: {
      // typeColor = 'bg-orange-400';
      typeColor = 'bg-gray-200';
      break;
    }
    default:
      break;
  }

  return (
    <div className={`rounded-xl p-1 px-3 border border-gray-900 text-xs inline ${typeColor}`}>
      {name}
    </div>
  );
}
