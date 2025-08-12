import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface MainButtonProps extends React.HTMLAttributes<HTMLElement> {
    href?: string
    label: string
    contrast?: boolean
    children: ReactNode
}

const MainButton: React.FC<MainButtonProps> = ({
    children,
    label,
    contrast = false,
    href = '',
    ...props
}) => {
    const isAnchorLink = href.startsWith('#')

    const classNames = `text-sm lg:text-md border border-solid border-black transition-all ${
        contrast ? 'bg-primary' : ''
    } hover:bg-brand-warm/60 px-3 py-2 rounded-md flex flex-row space-x-3 items-center`

    if (isAnchorLink) {
        return (
            <a href={href} className={classNames} {...props}>
                <span>{label}</span>
                {children}
            </a>
        )
    }

    return (
        <Link to={href} className={classNames} {...props}>
            <span>{label}</span>
            {children}
        </Link>
    )
}

export default MainButton