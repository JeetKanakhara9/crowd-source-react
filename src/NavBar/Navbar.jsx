import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/" >
          <h1>Logo</h1>
        </NavLink>
        <Bars/>
        <NavLink to="/register" activeStyle>Register</NavLink>
        <NavLink to="/login" activeStyle>Login</NavLink>
        <NavLink to="/about" activeStyle>About</NavLink>
        <NavLink to="/logout" activeStyle>Logout</NavLink>
      </Nav>
    </>
  );
}

export default Navbar
