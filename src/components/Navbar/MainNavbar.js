import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiPhone } from 'react-icons/fi';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

// Styled Components
const NavbarContainer = styled(Navbar)`
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavLinkStyled = styled(Link)`
  color: #000;
  text-decoration: none;
  margin-right: 20px;
  &:hover {
    color: #f05340;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Icon = styled.a`
  color: #f05340;
  margin-left: 10px;
  font-size: 20px;
  &:hover {
    color: #ff5733;
  }
`;

const CallUsDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #f05340;
`;

const DropdownContent = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 10px;
`;

const DropdownItem = styled.div`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

// React Component
const CustomNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle dropdown on click
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <NavbarContainer expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLinkStyled to="/">
            <img
              src="/path-to-logo.png"
              alt="TechCloud ERP"
              style={{ width: '150px' }} // Adjust width as needed
            />
          </NavLinkStyled>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/about">About</NavLinkStyled>
            <NavLinkStyled to="/industries">Industries</NavLinkStyled>
            <NavLinkStyled to="/products">Products</NavLinkStyled>
            <NavLinkStyled to="/services">Services</NavLinkStyled>
            <NavLinkStyled to="/bi">BI</NavLinkStyled>
            <NavLinkStyled to="/pricing">Pricing</NavLinkStyled>
            <NavLinkStyled to="/demo">Demo</NavLinkStyled>
            <NavLinkStyled to="/contact">Contact Us</NavLinkStyled>
          </Nav>

          {/* Icons and Dropdown Section */}
          <IconContainer>
            {/* Call Us Dropdown */}
            <CallUsDropdown>
              <DropdownButton onClick={toggleDropdown}>
                <FiPhone />
              </DropdownButton>
              <DropdownContent show={showDropdown}>
                <DropdownItem>
                  <img
                    src="/path-to-usa-flag.png"
                    alt="USA"
                    style={{ width: '20px', marginRight: '10px' }}
                  />
                  +1 (312) 766-3390
                </DropdownItem>
                <DropdownItem>
                  <img
                    src="/path-to-india-flag.png"
                    alt="India"
                    style={{ width: '20px', marginRight: '10px' }}
                  />
                  +91 891-943-9603
                </DropdownItem>
              </DropdownContent>
            </CallUsDropdown>

            {/* Social Media Icons */}
            <Icon href="https://www.facebook.com" target="_blank">
              <FaFacebookF />
            </Icon>
            <Icon href="https://www.linkedin.com" target="_blank">
              <FaLinkedinIn />
            </Icon>
            <Icon href="https://www.instagram.com" target="_blank">
              <FaInstagram />
            </Icon>
            <Icon href="https://www.youtube.com" target="_blank">
              <FaYoutube />
            </Icon>
            <Icon href="https://www.twitter.com" target="_blank">
              <FaTwitter />
            </Icon>
          </IconContainer>
        </Navbar.Collapse>
      </Container>
    </NavbarContainer>
  );
};

export default CustomNavbar;
