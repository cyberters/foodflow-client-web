import React, { useState } from "react";
import { Link } from "react-router-dom";
import User from "../Assets/Images/User.jpg";
import NavbarLink from "./NavbarLink";
import Breadcrumbs from "./Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faBurger, faClose, faNavicon } from "@fortawesome/free-solid-svg-icons";
import useCheckUserLoggedIn from "../Hooks/useCheckUserLoggedIn";
import useAuthUser from "../Hooks/useAuthUser";

const Navbar: React.FC = () => {
  const { isLoggedIn, loading, error } = useCheckUserLoggedIn()
  const [isOpen, setIsOpen] = useState(false);
  const { userData, loading: loadingUserDetails, error: errorUserDetails } = useAuthUser()

  return (
    <nav className="bg-brand-warm rounded-md px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-1">
          <h4 className="text-xl font-bold">food.flow</h4>
          <Breadcrumbs />
        </div>
        { loading && <div>Ładowanie...</div> }
        { isLoggedIn ? <div className="hidden lg:flex flex-row space-x-6 mx-auto">
          <NavbarLink href="/dashboard" label="Dashboard" />
        </div> : <div className="hidden lg:flex flex-row space-x-6 mx-auto">
          <NavbarLink href="/about" label="O nas" />
          <NavbarLink href="/idea" label="Nasz pomysł" />
          <NavbarLink href="/how-it-works" label="Jak to działa?" />
          <NavbarLink href="/for-families" label="Dla rodzin" />
          <NavbarLink href="/contact" label="Kontakt" />
        </div>}
        <div className="flex flex-row items-center space-x-4">
          { isLoggedIn ? <NavbarLink href="/user/details" label={`@${userData?.userName}`} /> : <NavbarLink href="/demo" label="Sprawdź demo!" />}
          <Link to={isLoggedIn ? `/user` : `/sign-in`}>
            <div
              className="w-12 h-12 rounded-full border border-black border-solid bg-center bg-cover"
              style={{ backgroundImage: `url(${User})` }}
            />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            {isOpen ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faNavicon} />}
          </button>
        </div>
      </div>
      {isOpen && (
        isLoggedIn ? <div className="hidden lg:flex flex-row space-x-6 mx-auto">
          <NavbarLink href="/dashboard" label="Dashboard" />
        </div> : <div className="hidden lg:flex flex-row space-x-6 mx-auto">
          <NavbarLink href="/about" label="O nas" />
          <NavbarLink href="/idea" label="Nasz pomysł" />
          <NavbarLink href="/how-it-works" label="Jak to działa?" />
          <NavbarLink href="/for-families" label="Dla rodzin" />
          <NavbarLink href="/contact" label="Kontakt" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
