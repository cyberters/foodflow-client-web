import React from "react";
import { NavLink } from "react-router-dom";

interface NavbarLinkProps {
  href: string;
  label: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, label }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `bg-primary border border-solid border-black transition-all px-3 py-2 rounded-md ${
          isActive
            ? "bg-brand-warm/80 font-bold"
            : "bg-brand-warm/40 hover:bg-brand-warm/60 hover:font-bold"
        }`
      }
    >
      <span>{label}</span>
    </NavLink>
  );
};

export default NavbarLink;
