import React, { useState, } from 'react';

import styled from 'styled-components';
import { Link, } from 'react-router-dom';

import logo from '../../images/logoplaceholder.png';
import sideMenu from '../../images/icons/side-menu.svg';
import { useWindowWidth, } from '../../hooks/useWindowWidth';

const navLinks = [
  { title: 'home', path: '/', },
  // { title: 'collection', path: '/collection', },
  { title: 'custom work', path: '/custom-work', },
  { title: 'about', path: '/about', },
  { title: 'contact', path: '/contact', },
];

const Navbar = () => {
  const mobileBreakPoint = 600
  const { mobileView, } = useWindowWidth(mobileBreakPoint);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const renderMobileMenu = () => {
    if (showMobileMenu) {
      return (
        <>
          { navLinks.map( ({ title, path, }) => (
            <MobileNavItem key={title}>
              <NavItem to={path} onClick={() => setShowMobileMenu(false)}>{ title }</NavItem>
            </MobileNavItem>
          ))}
        </>
      )
    }
  };

  const renderDesktopMenu = () => (
    <NavItems>
      { navLinks.map( ({ title, path, }) => (
        <NavItem key={title} to={path}>{ title }</NavItem>
      ))}
    </NavItems>
  );

  return (
    <>
      <NavContainer>
        <Logo src={logo} />
        { mobileView() && <MenuIcon src={sideMenu} onClick={() => setShowMobileMenu(!showMobileMenu)} /> }
        { !mobileView() && renderDesktopMenu() }
      </NavContainer>
      <MobileNavContainer>
        { mobileView() &&
          renderMobileMenu()
        }
      </MobileNavContainer>
    </>
  );
};

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0 0 0;
  padding: 0 100px 0 100px;

  @media (max-width: 600px) {
    margin-bottom: 30px;
    flex-direction: row;
  }
`;

const MobileNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
`;

const MobileNavItem = styled.div`
  padding: 20px 25px;
  background: #fff;
  width: 100vw;

  &:hover {
    & > a {
      /* border-bottom: 1px solid black; */
    }
  }
`;

const Logo = styled.img`
  width: 125px;
`;

const MenuIcon = styled.img`
  width: 50px;
  right: 0;
  position: absolute;
  margin-right: 10px;
  cursor: pointer;
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 25px 0 0 0;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: #494949;
  font-family: 'PT Sans Caption', sans-serif;
  font-size: 1rem;
  padding: 20px 25px;
`;

export default Navbar;
