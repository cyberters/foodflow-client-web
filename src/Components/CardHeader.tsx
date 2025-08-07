import React, { ReactNode } from "react"

interface CardHeaderProps {
    children?: ReactNode
    title?: string
    subtitle: string
}

const CardHeader: React.FC<CardHeaderProps> = ({ children, title, subtitle }) => {
    return (
        <div className="flex flex-col gap-2">
            {children}
            {title && <h4 className="text-lg md:text-xl lg:text-2xl">{title}</h4> }
            <span className="text-xs md:text-sm">{subtitle}</span>
        </div>
    )
}

export default CardHeader