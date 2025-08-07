import React, { ReactNode } from "react";

interface DashboardLayoutProps {
    children: ReactNode
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({children}) => {
    return (
        <div className='flex flex-col space-y-3 h-full'>
            {children}
        </div>
    )
}

export default DashboardLayout