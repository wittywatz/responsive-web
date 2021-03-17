import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

export const SideNavBar = styled.aside`
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '0.95' : '0')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  cursor: pointer;
  font-size: 2rem;
  outline: none;
  background: transparent;
`;

export const SideBarWrapper = styled.div`
  color: #fff;
`;
export const SideBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SideBarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #01bf71;
    transition: all 0.2s ease-in-out;
  }
`;

export const SideBarButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SideBarRoute = styled(Link)`
  border: none;
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 1rem 3rem;
  color: #010606;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: #010606;
  }
`;
