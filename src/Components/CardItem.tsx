import React from "react";

interface CardItemProps {
    intro: string
    header: string
    desc?: string,
    background: boolean
    border?: boolean
}

const CardItem: React.FC<CardItemProps> = ({ intro, header, desc, background, border = true }) => {
    return (
        <div className={`flex flex-col space-y-5 py-4 ${background && `transition-all ${border ? `border border-solid border-black px-5` : ``} hover:-translate-y-5`} cursor-pointer rounded-md bg-primary`}>
            <h4 className='text-lg bg-brand-warm px-3 py-2 rounded-md me-auto'>{intro}</h4>
            <h2 className='text-2xl'>{ header }</h2>
            {desc && <p>{desc}</p>}
        </div>
    )
}

export default CardItem