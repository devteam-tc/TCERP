import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavDropdown from './CustomNavDropdown';
import styled from 'styled-components';
import { NAV_ITEMS, releavant } from '../../utils/constants';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-submenu/dist/index.css";
import { DropdownSubmenu } from 'react-bootstrap-submenu';

// Styled Components for Navbar
const StyledNavLink = styled(Nav.Link)`
  text-decoration: none; /* Remove underline */
  color: black; /* Default text color */
  &:hover {
    color: #e93906 !important;
  }   
`;

const PhoneDropdownToggle = styled(Dropdown.Toggle)`
  border: none !important;
  background-color: transparent !important; /* Remove background */
  color: #05a7cc;
  padding: 8px !important;

  &.show {
    color: #05a7cc !important;
  }
`;

// Adjust Navbar Styling for Mobile View
const MobileNav = styled(Nav)`
  @media (max-width: 992px) {
    display: flex;
    padding: 2%;
    flex-direction: column;
    align-items: flex-start !important; /* Align nav links to the left */
  }
`;

const MobileNavbarCollapse = styled(Navbar.Collapse)`
  @media (max-width: 992px) {
    max-height: 300px; /* Fixed height for mobile menu */
    overflow-y: auto; /* Scrollable content */
    margin: 5%;
  }
`;

const NavbarToggle = styled(Navbar.Toggle)`
  border: none !important; /* Remove the border when clicked */
  &:focus {
    box-shadow: none !important; /* Remove the focus box-shadow */
  }
`;

const PhoneDropdownToggle = styled(Dropdown.Toggle)`
  border: none !important;
  background-color: transparent !important; /* Remove background */
  color: #05a7cc;
  padding: 8px !important;

  &.show {
    color: #05a7cc !important;
  }
`;

// Adjust Navbar Styling for Mobile View
const MobileNav = styled(Nav)`
  @media (max-width: 992px) {
    display: flex;
    padding: 2%;
    flex-direction: column;
    align-items: flex-start !important; /* Align nav links to the left */
  }
`;

const MobileNavbarCollapse = styled(Navbar.Collapse)`
  @media (max-width: 992px) {
    max-height: 300px; /* Fixed height for mobile menu */
    overflow-y: auto; /* Scrollable content */
    margin: 5%;
  }
`;

// Adjust Navbar to be responsive on different screen sizes
const MainNavbar = () => {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  const [expanded, setExpanded] = useState(false); // State for tracking the Navbar toggle

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.type = 'text/javascript';
    script.async = true;

    script.onload = () => setCalendlyLoaded(true);

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCalendlyWidget = () => {
    if (calendlyLoaded && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/dvignesh-techclouderp/demo',
      });
    } else {
      console.error('Calendly script not loaded.');
    }
  };

  const handleNavLinkClick = (item) => {
    if (item.isDemo) {
      openCalendlyWidget();
    }
    setExpanded(false); // Close the navbar when a link is clicked
  };

  const handleDropdownItemClick = () => {
    setExpanded(false); // Close the navbar when a dropdown item is clicked
  };

  const renderNavItems = () => {
    return NAV_ITEMS.map((item, index) => {
      if (item.type === 'link') {
        return (
          <StyledNavLink
            key={index}
            className={item.className || ''}
            onClick={() => handleNavLinkClick(item)}
          >
            <Link to={item.link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
              {item.title}
            </Link>
          </StyledNavLink>
        );
      } else if (item.type === 'dropdown') {
        return (
          <NavDropdown key={index} title={item.title}>
            {item.items.map((subItem, subIndex) => {
              if (subItem.type === 'dropdown') {
                return (
                  <CustomNavDropdown key={subIndex} title={subItem.title} direction={subItem.direction}>
                    {subItem.items.map((nestedItem, nestedIndex) => (
                      <StyledNavLink key={nestedIndex} target="_blank">
                        <Link to={nestedItem.link}>{nestedItem.title}</Link>
                      </StyledNavLink>
                    ))}
                  </DropdownSubmenu>
                );
              } else {
                return (
                  <StyledNavLink key={subIndex} target="_blank">
                    <Link to={subItem.link}>{subItem.title}</Link>
                  </StyledNavLink>
                );
              }
            })}
          </NavDropdown>
        );
      }
      return null;
    });
  };

  return (
    <Navbar expand="md" bg="light" variant="light" className="main-navbar fw-semibold">
      <Container fluid>
        <Navbar.Brand href="index.html">
          <Link to="/"><img src={releavant.logo} style={{ width: '200px', padding: '2%' }} alt="logo" /></Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mx-auto">{renderNavItems()}</Nav>
        </Navbar.Collapse>

        <div className="d-none d-md-block">
          <a
            href="tel:+8919439603"
            className="btn cta-02 m-2"
            style={{ border: '2px solid #04a8ce', borderRadius: '8px' }}
          >
            <img
              src={releavant.us_flag_img}
              id="imagep"
              style={{ width: '25px', height: '25px', marginRight: '10px', borderRadius: '50%' }}
              alt=""
            />
            +1 (312) 766-3390
          </a>

          <a
            href="tel:+8919439603"
            className="btn cta-01 m-2"
            style={{ border: '2px solid #04a8ce', borderRadius: '8px' }}
          >
            <img
              src={releavant.indian_flag_img}
              id="imagep"
              style={{ width: '25px', height: '25px', marginRight: '10px', borderRadius: '50%' }}
              alt=""
            />
            +91 8919439603
          </a>
        </div>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
