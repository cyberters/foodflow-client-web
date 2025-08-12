import React, { ReactNode } from "react"

interface ListBoxItemProps {
    label?: string
    value?: any
    children?: ReactNode
}

const ListBoxItem : React.FC<ListBoxItemProps> = ({label, value, children}) => {
    return (
        <div className="flex flex-col py-2 space-y-1">
            {label && <small>{label}</small>}
            {value && <span className="text-sm lg:text-md">{value}</span>}
            {children} 
        </div>
    )
}

export default ListBoxItem