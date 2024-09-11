import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { BsTelephone } from 'react-icons/bs'; // Phone icon
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaPinterest, FaYoutube, FaTwitter } from 'react-icons/fa'; // Social media icons
import styled from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { NAV_ITEMS, releavant } from '../../utils/constants';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  font-size: 20px;
  &:hover {
    color: #e93906;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

// Styled Custom Dropdown Component
const CustomDropdown = styled(Dropdown)`
  position: relative;
  display: inline-block;
  cursor: pointer;

  .dropdown-toggle::after {
    display: none; /* Hide default dropdown icon */
  }

  .dropdown-toggle {
    padding: 8px;
    border-radius: 4px;
    transition: color 0.3s;

    &:hover {
      color: #e93906;
    }
  }

  .dropdown-menu {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
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

const DropdownIcon = styled.div`
  display: inline-block;
  margin-left: 5px;
`;

const DropdownItem = styled(Dropdown.Item)`
  padding: 8px 16px;
  &:hover {
    background-color: #f8f9fa;
  }
`;

// Custom Dropdown for Navbar with arrow icons
const CustomNavDropdown = ({ title, children }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <CustomDropdown
      show={showDropdown}
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <Dropdown.Toggle as="div">
        {title}
        <DropdownIcon>
          {showDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </DropdownIcon>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {children}
      </Dropdown.Menu>
    </CustomDropdown>
  );
};

CustomNavDropdown.Item = DropdownItem; // Allows usage of CustomNavDropdown.Item

// MainNavbar Component
const MainNavbar = () => {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

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
  };

  const togglePhoneDropdown = () => {
    setShowDropdown(!showDropdown);
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
          <CustomNavDropdown key={index} title={item.title}>
            {item.items.map((subItem, subIndex) => {
              if (subItem.type === 'dropdown') {
                return (
                  <CustomNavDropdown key={subIndex} title={subItem.title}>
                    {subItem.items.map((nestedItem, nestedIndex) => (
                      <StyledNavLink key={nestedIndex}>
                        <Link to={nestedItem.link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                          {nestedItem.title}
                        </Link>
                      </StyledNavLink>
                    ))}
                  </CustomNavDropdown>
                );
              } else {
                return (
                  <StyledNavLink key={subIndex}>
                    <Link to={subItem.link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                      {subItem.title}
                    </Link>
                  </StyledNavLink>
                );
              }
            })}
          </CustomNavDropdown>
        );
      }
      return null;
    });
  };

  return (
    <Navbar expand="lg" bg="light" variant="light" className="main-navbar fw-semibold">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={releavant.logo} style={{ width: '200px' }} alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mx-auto d-flex align-items-center">
            {renderNavItems()}

            {/* Phone Dropdown Icon */}
            <CustomDropdown show={showDropdown} onToggle={togglePhoneDropdown} className="contact-dropdown">
              <Dropdown.Toggle
                className="btn cta-02 ms-3"
                style={{ border: '2px solid #04a8ce', borderRadius: '8px', backgroundColor: '#05A7CC' }}
              >
                <BsTelephone size={20}  />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="tel:+13127663390">
                  <img
                    src={releavant.us_flag_img}
                    style={{ width: '25px', height: '25px', marginRight: '10px', borderRadius: '50%' }}
                    alt="US flag"
                  />
                  +1 (312) 766-3390
                </Dropdown.Item>
                <Dropdown.Item href="tel:+9198929439603">
                  <img
                    src={releavant.indian_flag_img}
                    style={{ width: '25px', height: '25px', marginRight: '10px', borderRadius: '50%' }}
                    alt="India flag"
                  />
                  +91 8919439603
                </Dropdown.Item>
              </Dropdown.Menu>
            </CustomDropdown>
          </Nav>

          {/* Social Media Icons on the Right */}
          <div className="d-flex align-items-center ms-auto">
            <SocialIcon href="https://www.instagram.com" target="_blank"><FaInstagram /></SocialIcon>
            <SocialIcon href="https://www.facebook.com" target="_blank"><FaFacebookF /></SocialIcon>
            <SocialIcon href="https://www.linkedin.com" target="_blank"><FaLinkedinIn /></SocialIcon>
            <SocialIcon href="https://www.pinterest.com" target="_blank"><FaPinterest /></SocialIcon>
            <SocialIcon href="https://www.youtube.com" target="_blank"><FaYoutube /></SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank"><FaTwitter /></SocialIcon>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
