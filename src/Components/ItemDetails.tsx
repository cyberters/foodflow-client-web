import { ReactNode } from "react"

interface ItemDetailsProps {
    label: string
    children: ReactNode
}

const ItemDetails : React.FC<ItemDetailsProps> = ({ label, children }) => {
    return (
        <div className="px-1 bg-zinc-300 flex flex-row space-x-1 rounded-md py-1 text-sm text-zinc-600 items-center">
            {children}
            <b>{label}</b>
        </div>
    )
}

export default ItemDetails