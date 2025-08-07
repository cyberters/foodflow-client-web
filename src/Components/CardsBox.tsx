import React, { ReactNode } from "react";
import CardItem from "./CardItem";

interface CardsBoxProps {
    children: ReactNode
}

const CardsBox: React.FC<CardsBoxProps> = ({children}) => {
    return (
        <div className="grid grid-cols-3 gap-8">
            {children}
        </div>
    )
}

export default CardsBox