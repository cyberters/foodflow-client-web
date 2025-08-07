import React, { ReactNode } from "react";

interface GridTemplateProps {
    children: ReactNode
}

const GridTemplate : React.FC<GridTemplateProps> = ({children}) => {
    return (
        <div className="grid grid-cols-4 gap-4">
            {children}
        </div>
    )
}

export default GridTemplate