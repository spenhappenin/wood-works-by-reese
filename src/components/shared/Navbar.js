import React from 'react';

import styled from 'styled-components';
import { Link, } from 'react-router-dom';

import logo from '../../images/logoplaceholder.png';

const navLinks = [
  { title: 'home', path: '/', },
  { title: 'collection', path: '/collection', },
  { title: 'custom work', path: '/custom-work', },
  { title: 'about', path: '/about', },
  { title: 'contact', path: '/contact', },
];

const Navbar = () => {
  return (
    <NavContainer>
      <Logo src={logo} />
      <NavItems>
        {
          navLinks.map( nav => (
            <NavItem to={nav.path}>{ nav.title }</NavItem>
          ))
        }
      </NavItems>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 0 0;
  padding: 0 100px 0 100px;
`;

const Logo = styled.img`
  width: 125px;
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

  &:hover {
    /* background: #f3eee7; */
    background: #dedede;
  }
`;

export default Navbar;
