import React, { ReactNode } from "react";
import CardItem from "./CardItem";

interface CardsBoxProps {
    children: ReactNode
}

const CardsBox: React.FC<CardsBoxProps> = ({children}) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-8 px-3 lg:px-0">
            {children}
        </div>
    )
}

export default CardsBox