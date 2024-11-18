type CardType = {
    title: string,
    subtitle: string,
    description: string
}

export default function Card({ title, subtitle, description}: CardType) {
    return (
        <div className="flex flex-row">
            <div className="w-[30%] pr-8">
                <h5 className="text-xs uppercase">{subtitle}</h5>
            </div>
            <div className="w-[70%]">
                <h4 className="uppercase font-bold">{title}</h4>

                <p className="text-justify">{description}</p>
            </div>
        </div>
    )
}