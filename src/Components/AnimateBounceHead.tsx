import { ReactNode } from "react"

interface AnimateBounceHeadProps {
    label: string
    children?: ReactNode
}

const AnimateBounceHead : React.FC<AnimateBounceHeadProps> = ({ label, children }) => {
    return <div className='text-sm lg:text-md bg-brand-warm px-3 py-2 rounded-md me-auto animate-bounce-slow flex flex-row space-x-2 items-center'>
        <span>{label}</span>
        {children}
    </div>
}

export default AnimateBounceHead