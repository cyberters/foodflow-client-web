import React, { ReactNode } from "react"
import { Link } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    return (
        <div className="bg-primary px-3 py-2 md:px-8 md:py-5 flex flex-col min-h-screen">
           {children}
        </div>
    )
}

export default MainLayout