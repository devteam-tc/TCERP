import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NAV_ITEMS, releavant } from '../../utils/constants';  // Importing the constants
import SocialMediaIcons from './SocialMediaIcons';
import PhoneDropdown from './PhoneDropdown';
import NavItem from './NavItem';
import CustomToggle from './CustomToggle';
import CalendlyWidget from './CalendlyWidget'; // Import the Calendly widget
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-submenu/dist/index.css";

const MobileNav = styled(Nav)`
  @media (max-width: 992px) {
    display: flex;
    padding: 2%;
    flex-direction: column;
    align-items: flex-start !important;
  }
`;

const MobileNavbarCollapse = styled(Navbar.Collapse)`
  @media (max-width: 992px) {
    max-height: 300px;
    overflow-y: auto;
    margin: 5%;
  }
`;

const MainNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavLinkClick = (item) => {
    console.log(`NavLink clicked: ${item.title}`);
    setExpanded(false);
  };

  const handleDropdownItemClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar expanded={expanded} expand="lg" collapseOnSelect={true}>
      <Container fluid className="justify-content-between px-4 px-lg-5">
        {/* Brand Logo */}
        <Navbar.Brand>
          <Link to="/">
            <img src={releavant.logo} alt="Logo" className="img-fluid" />
          </Link>
        </Navbar.Brand>

        {/* Phone Dropdown */}
        <PhoneDropdown />

        {/* Social Media Icons */}
        <SocialMediaIcons />

        {/* Navbar Toggle for Mobile */}
        <CustomToggle expanded={expanded} setExpanded={setExpanded} />

        {/* Collapsible Navbar */}
        <MobileNavbarCollapse id="navbarSupportedContent">
          <MobileNav className="m-auto align-items-lg-center">
            {NAV_ITEMS.map((item, index) => (
              <NavItem
                key={index}
                item={item}
                isLargeScreen={isLargeScreen}
                handleNavLinkClick={handleNavLinkClick}
                handleDropdownItemClick={handleDropdownItemClick}
              />
            ))}
          </MobileNav>
        </MobileNavbarCollapse>

        {/* Calendly Widget */}
        <CalendlyWidget />
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
