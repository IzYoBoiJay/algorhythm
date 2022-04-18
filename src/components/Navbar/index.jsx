// Navbar implementation
import React from "react";
import { Bars, Nav, NavIcon, NavLink } from "./NavbarElements";
import Cookies from "js-cookie";

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
            Cookies.remove("spotify_access_token");
            window.location.reload();
          }}
        >
          Logout
        </button>
        <iframe
          style={{ display: "none" }}
          src="https://spotify.com/logout"
        ></iframe>
      </Nav>
    </>
  );
};

export default Navbar;
