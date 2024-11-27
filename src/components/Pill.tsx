import React from 'react';

export enum PILL_TYPE {
  LANGUAGE = 'LANGUAGE', // eslint-disable-line no-unused-vars
  FRAMEWORK = 'FRAMEWORK', // eslint-disable-line no-unused-vars
  SOFT = 'SOFT' // eslint-disable-line no-unused-vars
}

export type PillType = {
  theme?: string,
  name: string,
  type: string,
  // level - strength
}

export default function Pill({ name, type, theme }: PillType) {
  let typeColor = 'bg-gray-100';
  let textColor = 'text-black';
  let borderColor = 'border-gray-900';
  let borderStyle = 'rounded-xl';

  if (theme === 'colors') {
    switch (type) {
      case PILL_TYPE.LANGUAGE: {
        typeColor = 'bg-pink-400';
        textColor = 'text-pink-900';
        borderColor = 'border-pink-900';
        break;
      }
      case PILL_TYPE.SOFT: {
        typeColor = 'bg-orange-400';
        textColor = 'text-orange-900';
        borderColor = 'border-orange-900';

        break;
      }
      default:
        typeColor = 'bg-purple-400';
        textColor = 'text-purple-900';
        borderColor = 'border-purple-900';

        break;
    }
    borderStyle = 'border-dashed';
  } else {
    switch (type) {
      case PILL_TYPE.LANGUAGE: {
        typeColor = 'bg-gray-300';
        break;
      }
      case PILL_TYPE.SOFT: {
        typeColor = 'bg-gray-200';
        break;
      }
      default:
        typeColor = '';
        break;
    }
  }

  return (
    <div className={`${borderStyle} p-1 px-3 border ${borderColor} text-xs inline ${textColor} ${typeColor}`}>
      {name}
    </div>
  );
}
