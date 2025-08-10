import React from "react";

interface CardItemProps {
    intro: string
    header: string
    desc: string,
    background: boolean
}

const CardItem: React.FC<CardItemProps> = ({ intro, header, desc, background }) => {
    return (
        <div className={`flex flex-col space-y-5 px-5 py-4 ${background && `transition-all border border-solid border-black hover:-translate-y-5`} cursor-pointer rounded-md`}>
            <h4 className='text-lg bg-brand-warm px-3 py-2 rounded-md me-auto'>{intro}</h4>
            <h2 className='text-2xl'>{ header }</h2>
            <p>{desc}</p>
        </div>
    )
}

export default CardItem