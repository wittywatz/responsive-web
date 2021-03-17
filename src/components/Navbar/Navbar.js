import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavContainer,
  NavLogo,
  HamMenu,
  NavLinks,
  NavMenu,
  NavItem,
  NavButtonLink,
  NavButton,
} from './NavbarStyles';

const Navbar = ({ toggle, isOpen }) => {
  return (
    <div>
      <Nav>
        <NavContainer>
          <NavLogo to="/">Welch</NavLogo>
          {isOpen ? (
            ''
          ) : (
            <HamMenu onClick={toggle}>
              <FaBars />
            </HamMenu>
          )}

          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Sign Up">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavButton>
            <NavButtonLink to="/signin">Sign In</NavButtonLink>
          </NavButton>
        </NavContainer>
      </Nav>
    </div>
  );
};
export default Navbar;
