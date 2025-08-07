import { Link } from "react-router-dom"

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-row gap-4">
            <small>2025 foodflow 1.01.001</small>
            <small><Link to={`/about`}>O aplikacji</Link></small>
        </footer> 
    )
}

export default Footer