import React, { useState } from "react";
import { Link } from "react-router-dom";
import User from "../Assets/Images/User.jpg";
import NavbarLink from "./NavbarLink";
import Breadcrumbs from "./Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faNavicon } from "@fortawesome/free-solid-svg-icons";
import useCheckUserLoggedIn from "../Hooks/useCheckUserLoggedIn";
import useAuthUser from "../Hooks/useAuthUser";

const Navbar: React.FC = () => {
  const { isLoggedIn, loading } = useCheckUserLoggedIn();
  const [isOpen, setIsOpen] = useState(false);
  const { userData } = useAuthUser();

  const loggedInLinks = [{ href: "/dashboard", label: "Dashboard" }];
  const loggedOutLinks = [
    { href: "/about", label: "O nas" },
    { href: "/demo", label: "Sprawdź demo!" }
  ];

  const menuLinks = isLoggedIn ? loggedInLinks : loggedOutLinks;

  return (
    <nav className="bg-brand-warm rounded-md px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-1">
          <h4 className="text-xl font-bold">food.flow</h4>
          <Breadcrumbs />
        </div>
        {!loading && (
          <div className="hidden lg:flex flex-row space-x-6 mx-auto">
            {menuLinks.map((link) => (
              <NavbarLink key={link.href} href={link.href} label={link.label} />
            ))}
          </div>
        )}
        <div className="flex flex-row items-center space-x-4">
          {isLoggedIn ? (
            <NavbarLink
              href="/user/details"
              label={`@${userData?.userName}`}
            />
          ) : (
            <NavbarLink href="/sign-in" label="Zaloguj się!" />
          )}
          {isLoggedIn && <Link to={`/user`}>
            <div
              className="w-12 h-12 rounded-full border border-black border-solid bg-center bg-cover"
              style={{ backgroundImage: `url(${User})` }}
            />
          </Link>}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl"
          >
            {isOpen ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faNavicon} />}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 mt-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-2">
          {menuLinks.map((link) => (
            <NavbarLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
