// CSS for navbar components
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

//NavBar
export const Nav = styled.nav`
  display: flex;
  background-color: white;
  align-items: center;
  text-align: center;
  padding: 1rem 2rem;
  max-width: 100%;
  height: 15%;
  gap: 3rem;
  font-size: 1.5rem;
  a:first-child {
    margin-right: auto;

    &:hover {
      text-decoration: none;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: #000000;
  font-size: rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;
