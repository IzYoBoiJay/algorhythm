// Navbar implementation
import React from "react";
import { Bars, Nav, NavIcon, NavLink } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>ALGORHYTHM</h1>
        </NavLink>

        <NavLink to="/explore">
          <p>Explore</p>
        </NavLink>

        <NavLink to="/404">
          <p>Activity</p>
        </NavLink>

        <a
          href={
            window.location.protocol +
            "//" +
            window.location.hostname +
            ":4000/logout"
          }
        >
          Logout
        </a>
      </Nav>
    </>
  );
};

export default Navbar;
