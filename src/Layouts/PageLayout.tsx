import React, { ReactNode } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

interface PageLayoutProps {
    children: ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({children}) => {
    return (
        <div className='flex flex-col space-y-3 flex-grow'>
            <Navbar/>
            <main className="flex-grow flex flex-col">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default PageLayout