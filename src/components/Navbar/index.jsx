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

        <button
          onClick={() => {
            localStorage.removeItem("spotify_access_token");
            window.location.reload();
          }}
        >
          Logout
        </button>
      </Nav>
    </>
  );
};

export default Navbar;
