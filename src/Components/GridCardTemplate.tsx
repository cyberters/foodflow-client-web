import React, { ReactNode } from "react";

interface GridCardTemplateProps {
    children: ReactNode
}

const GridCardTemplate : React.FC<GridCardTemplateProps> = ({children}) => {
    return (
        <div className="flex flex-col space-y-2">
            {children}
        </div>
    )
}

export default GridCardTemplate