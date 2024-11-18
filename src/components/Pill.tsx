export enum PILL_TYPE {
    LANGUAGE = "LANGUAGE",
    FRAMEWORK = "FRAMEWORK",
    SOFT = "SOFT"
}

type PillType = {
    name: string,
    type: string,
    // level - strength
}

export default function Pill({name, type}: PillType) {

    // let typeColor = 'bg-purple-400'
    let typeColor = 'bg-gray-400'
    switch (type) {
        case PILL_TYPE.LANGUAGE: {
            // typeColor = 'bg-pink-400';
            typeColor = 'bg-gray-300';
            break;
        }
        case PILL_TYPE.SOFT: {
            // typeColor = 'bg-orange-400';
            typeColor = 'bg-gray-100';
            break;
        }
    }

    return (
        <div className={`rounded-xl p-2 px-4 text-xs inline ${typeColor}`}>
            {name}
        </div>
    )
}