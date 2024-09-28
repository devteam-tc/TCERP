import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Dropdown, NavDropdown} from 'react-bootstrap';
import { IoCall } from "react-icons/io5";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaPinterest, FaYoutube, FaTwitter } from 'react-icons/fa'; // Social media icons
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Hamburger and Close icons
import styled from 'styled-components';
import { NAV_ITEMS, releavant } from '../../utils/constants';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-submenu/dist/index.css";
import { DropdownSubmenu } from 'react-bootstrap-submenu';
import CalendlyWidget from './CalendlyWidget';
// Styled Components for Navbar
const StyledNavLink = styled(Nav.Link)`
  text-decoration: none !important;
  color: black !important;
  &:hover {
    color: #e93906 !important;
  }
`;

const SocialIcon = styled.a`
  color: #000;
  margin: 0 8px;
  font-size: 22px;
  &:hover {
    ${({ href }) => {
      if (href.includes('instagram')) return 'color: #E1306C;';
      if (href.includes('facebook')) return 'color: #1877F2;';
      if (href.includes('linkedin')) return 'color: #0077B5;';
      if (href.includes('pinterest')) return 'color: #E60023;';
      if (href.includes('youtube')) return 'color: #FF0000;';
      if (href.includes('twitter')) return 'color: #1DA1F2;';
      return 'color: #000;';
    }}
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

const CustomDropdown = styled(Dropdown)`
  position: relative;
  display: inline-block;
  cursor: pointer;

  .dropdown-toggle::after {
    display: none; /* Hide default dropdown icon */
  }

  .dropdown-toggle {
    padding: 8px;
    transition: color 0.3s;
    background-color: transparent; /* Remove background color */
    border: none !important; /* No border */
    box-shadow: none !important; /* No shadow on click */

    &:hover {
      color: #e93906;
    }
  }

  .dropdown-menu {
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 0;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
  }

  &:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
  }

  &.contact-dropdown {
    @media (max-width: 1200px) {
      display: none;
    }
  }
`;


const StyledDropdownItem = styled(Dropdown.Item)`
  position: relative;
  width: -webkit-fill-available;
  color: black !important;
  
  // Remove blue background and border on focus or active state
  &:focus,
  &:active {
    background-color: transparent !important;
    color: #e93906 !important; // Keep the hover color
    box-shadow: none !important; // Remove focus box-shadow
  }

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
const MainNavbar = () => {
  const [expanded, setExpanded] = useState(false); // State for tracking the Navbar toggle
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);
  const { openCalendlyWidget } = CalendlyWidget(); // Use the Calendly widget

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on unmount
    };
  }, []);

  const handleNavLinkClick = (item) => {
    if (item.isDemo) {
      openCalendlyWidget(); // Call the Calendly widget when demo link is clicked
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
          <NavDropdown key={index} title={item.title} className="w-100 d-grid">
            <div style={{ padding: '15px 30px 30px 15px' }}>
              {item.items.map((subItem, subIndex) => {
                if (subItem.type === 'dropdown') {
                  return (
                    <DropdownSubmenu key={subIndex} title={subItem.title} alignRight>
                      {subItem.items.map((subSubItem, subSubIndex) => (
                        <StyledDropdownItem key={subSubIndex} onClick={handleDropdownItemClick}>
                          <Link to={subSubItem.link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            {subSubItem.title}
                          </Link>
                        </StyledDropdownItem>
                      ))}
                    </DropdownSubmenu>
                  );
                } else {
                  return (
                    <StyledDropdownItem key={subIndex} onClick={handleDropdownItemClick}>
                      <Link to={subItem.link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        {subItem.title}
                      </Link>
                    </StyledDropdownItem>
                  );
                }
              })}
            </div>
          </NavDropdown>
        );
      }
      return null;
    });
  };

  return (
    <Navbar expand="lg" bg="light" variant="light" className="main-navbar fw-semibold" style={{ borderTop: '3px solid #ef5228' }} expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={releavant.logo} style={{ width: '200px' }} alt="logo" />
        </Navbar.Brand>

        <NavbarToggle aria-controls="navbarSupportedContent" onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </NavbarToggle>

        <MobileNavbarCollapse id="navbarSupportedContent">
          <MobileNav className="mx-auto d-flex align-items-center">
            {renderNavItems()}
            {/* Phone Dropdown Icon */}
            <CustomDropdown className="contact-dropdown">
              <PhoneDropdownToggle className="btn cta-02">
                <IoCall size={28} />
              </PhoneDropdownToggle>

              <Dropdown.Menu>
              <div style={{padding: '15px 30px 30px 15px'}}>
              <Dropdown.Item href="tel:+9198929439603" className='my-1'>
                  <img
                    src={releavant.indian_flag_img}
                    style={{ width: '25px', height: '25px', marginRight: '10px', borderRadius: '50%' }}
                    alt="Indian flag"
                  />
                  +91 8929439603
              </Dropdown.Item>
              <Dropdown.Item href="tel:+13127663390" className='my-1'>
                  <img
                    src={releavant.us_flag_img}
                    style={{ width: '25px', height: '25px', marginRight: '10px', borderRadius: '50%' }}
                    alt="US flag"
                  />
                  +1 (312) 766-3390
              </Dropdown.Item>
              </div>
                
              </Dropdown.Menu>
            </CustomDropdown>
          </MobileNav>
          {/* Social Media Icons at right side */}
          <div className="d-flex align-items-center ms-auto">
              <SocialIcon href="https://www.instagram.com" target="_blank">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon href="https://www.facebook.com" target="_blank">
                <FaFacebookF />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com" target="_blank">
                <FaLinkedinIn />
              </SocialIcon>
              <SocialIcon href="https://www.pinterest.com" target="_blank">
                <FaPinterest />
              </SocialIcon>
              <SocialIcon href="https://www.youtube.com" target="_blank">
                <FaYoutube />
              </SocialIcon>
              <SocialIcon href="https://www.twitter.com" target="_blank">
                <FaTwitter />
              </SocialIcon>
            </div>
        </MobileNavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;