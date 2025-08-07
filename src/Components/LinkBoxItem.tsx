import { ReactNode } from "react"
import { Link } from "react-router-dom"

interface LinkBoxItemProps {
    linkHref: string
    children: ReactNode
}

const LinkBoxItem : React.FC<LinkBoxItemProps> = ({linkHref, children}) => {
    return (
        <Link to={linkHref} className="hover:bg-primary rounded-md transition-all hover:px-3 flex flex-row">
            {children}
        </Link>
    )
}

export default LinkBoxItem