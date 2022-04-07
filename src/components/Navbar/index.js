// Navbar implementation
import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements'

const Navbar = () => {


    return (
        <>
            <Nav>
                <NavLink to="/">

                    <h1>ALGORHYTHM</h1>
                    
                </NavLink>

                <NavLink to="/404">

                    <p>Explore</p>

                </NavLink>

                <NavLink to="/404">

                    <p>Activity</p>

                </NavLink>

                <NavLink to="/404">

                    <p>Logout</p>

                </NavLink>

            </Nav>
        </>
    )
}

export default Navbar;