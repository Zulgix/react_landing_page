import React, { useEffect, useState } from "react";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./StyledNavBar";
import { FaBars } from "react-icons/fa";
import {animateScroll as scroll} from 'react-scroll';

function NavBar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const toggleHome = () => {
      scroll.scrollToTop();
  }

  return (
    <Nav scrollNav={scrollNav}>
      <NavBarContainer>
        <NavLogo to="/" onClick={toggleHome} > Miz! </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink to="about" smooth={true} duration={500} spy={true} offset={-80} > About </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="discover" smooth={true} duration={500} spy={true} exact="true" offset={-80}> Discover </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="services" smooth={true} duration={500} spy={true} exact="true" offset={-80}> Services </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="signup" smooth={true} duration={500} spy={true} exact="true" offset={-80}> Sign Up </NavLink>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="signin"> Sign In </NavBtnLink>
        </NavBtn>
      </NavBarContainer>
    </Nav>
  );
}

export default NavBar;
