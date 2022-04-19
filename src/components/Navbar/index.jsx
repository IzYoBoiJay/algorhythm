// Navbar implementation
import React from "react";
import { Bars, Nav, NavIcon, NavLink, LogoutButton } from "./NavbarElements";

const Navbar = () => {

  function logout() {

    localStorage.removeItem("spotify_access_token");
    window.location.reload();

  }

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

        <NavLink  onClick={ logout } to="/">
          <p>Logout</p>
        </NavLink>

      </Nav>
    </>
  );
};

export default Navbar;
