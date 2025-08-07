import React, { ReactNode } from "react"

interface ListBoxItemProps {
    label?: string
    value?: any
    children?: ReactNode
}

const ListBoxItem : React.FC<ListBoxItemProps> = ({label, value, children}) => {
    return (
        <div className="flex flex-col py-2">
            {label && <small>{label}</small>}
            <span>{value || children}</span> 
        </div>
    )
}

export default ListBoxItem