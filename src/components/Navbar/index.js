import React from "react";

import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Lib</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>

        <NavMenu>
          <NavItem>
            <NavLinks to="/">Todo</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="quiz">Quiz</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="components">All Components</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
