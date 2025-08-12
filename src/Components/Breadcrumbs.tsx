import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-xs lg:text-sm text-gray-800 flex flex-row space-x-2 items-center">
        <span>Jesteś tu:</span>
        <ol className="flex space-x-1">
            <li>
            <Link to="/" className="hover:underline text-gray-800">
                Home
            </Link>
            </li>
            {pathnames.map((name, index) => {
            const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
            const isLast = index === pathnames.length - 1;

            return (
                <li key={routeTo} className="flex items-center space-x-1">
                <span>/</span>
                {isLast ? (
                    <span className="text-gray-800 font-bold">{decodeURIComponent(name)}</span>
                ) : (
                    <Link to={routeTo} className="hover:underline text-gray-800">
                    {decodeURIComponent(name)}
                    </Link>
                )}
                </li>
            );
            })}
        </ol>
    </nav>
  );
};

export default Breadcrumbs;
