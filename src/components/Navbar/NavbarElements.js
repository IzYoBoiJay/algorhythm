// CSS for navbar components
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

//NavBar
export const Nav = styled.nav`
  display: flex;
  background-color: white;
  align-items: center;
  text-align: center;
  margin-top: 25px;
  padding: 1rem 4rem;
  max-width: 100%;
  height: 60px;
  gap: 4rem;
  font-size: 1.06rem;
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

  p {
    &:hover,
    &:focus {
      color: #1db954;
      transform: translate(0px, -5px);
    }
  }

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const LogoutButton = styled.div`
  color: #000000;
  font-size: rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  // margin: 1em;
  padding: 0.5em 1em;
  border: 1px solid #1db954;
  border-radius: 20px;

  &:hover,
  &:focus {
    background-color: #1db954;
    color: white;
  }
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;
