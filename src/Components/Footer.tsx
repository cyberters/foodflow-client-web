import { Link } from "react-router-dom"

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-row gap-4">
            <small>2025 food.flow.ai | all rights reserved</small>
            {/* <small><Link to={`/about`}>O aplikacji</Link></small> */}
        </footer> 
    )
}

export default Footer