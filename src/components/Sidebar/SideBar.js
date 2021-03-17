import React from 'react';
import {
  SideNavBar,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBarButtonWrap,
  SideBarRoute,
} from './SideBarStyles';

const SideBar = ({ isOpen, toggle }) => {
  return (
    <div>
      <SideNavBar isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>
            <SideBarLink to="about" onClick={toggle}>
              About
            </SideBarLink>
            <SideBarLink to="discover" onClick={toggle}>
              Discover
            </SideBarLink>
            <SideBarLink to="services" onClick={toggle}>
              Services
            </SideBarLink>
            <SideBarLink to="signup" onClick={toggle}>
              Sign Up
            </SideBarLink>
          </SideBarMenu>
          <SideBarButtonWrap>
            <SideBarRoute to="/signin" onClick={toggle}>
              Sign In
            </SideBarRoute>
          </SideBarButtonWrap>
        </SideBarWrapper>
      </SideNavBar>
    </div>
  );
};

export default SideBar;
