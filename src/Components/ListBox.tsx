import React, { ReactNode } from "react"

interface ListBoxProps {
    children: ReactNode
}

const ListBox: React.FC<ListBoxProps> = ({children}) => {
    return (
        <div className="rounded-md flex flex-col px-3 py-1 bg-brand-warm/40 divide-y divide-black/30 mb-auto">
            {children}
        </div>
    )
}

export default ListBox