import React, { ReactNode } from "react"

interface CardSectionProps {
    children: ReactNode
}

const CardSection: React.FC<CardSectionProps> = ({children}) => {
    return (
        <div className="border border-black border-solid rounded-md px-4 py-3 flex flex-col">
            {children}
        </div>
    )
}

export default CardSection