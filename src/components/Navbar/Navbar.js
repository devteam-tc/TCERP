// import React, { useState } from 'react';
// import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
// import { BsChevronDown, BsChevronUp } from 'react-icons/bs'; // Importing chevron icons
// import styled from 'styled-components';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const StyledNavbar = styled(Navbar)`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 4.25rem;
//   background-color: #fff;
//   box-shadow: var(--shadow-medium);
//   z-index: 10;

//   .navbar-brand {
//     font-family: inherit;
//     font-size: 1.6rem;
//     font-weight: 700;
//     text-transform: uppercase;
//     color: var(--color-blue-300);
//   }

//   @media (max-width: 992px) {
//     height: auto; // Adjust height for smaller screens
//     padding: 1rem;

//     .navbar-brand {
//       font-size: 1.4rem; // Reduce brand size on mobile
//     }
//   }
// `;

// const StyledNavDropdown = styled(NavDropdown)`
//   .dropdown-toggle::after {
//     display: none; // Hide the default dropdown arrow
//   }
// .dropdown-item:focus, .dropdown-item:hover{
//   background: none !important;

//   }
//   .dropdown-content {
//     display: flex;
//     flex-wrap: nowrap;
//     padding: 1rem;

//     @media (max-width: 992px) {
//       flex-wrap: wrap; // Stack items vertically on small screens
//       padding: 0.5rem;
//     }
//   }
// `;

// const DropdownGroup = styled.div`
//   margin-right: 2rem;

//   @media (max-width: 992px) {
//     margin-right: 0; // Remove margin on mobile
//     margin-bottom: 1rem;
//   }
// `;

// const DropdownTitle = styled.div`
//   font-weight: 600;
//   margin-bottom: 0.5rem;
// `;

// const DropdownItems = styled(NavDropdown.Item)`
//   display: block;
//   padding: 0.5rem 0;

//   @media (max-width: 992px) {
//     padding: 0.3rem 0; // Adjust padding for smaller screens
//   }
// `;

// const NavbarComponent = () => {
//   const [expanded, setExpanded] = useState(false);
//   const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);
//   const [showProductsDropdown, setShowProductsDropdown] = useState(false);
//   const [showServicesDropdown, setShowServicesDropdown] = useState(false);

//   return (
//     <StyledNavbar expanded={expanded} expand="lg" variant="light">
//       <Container>
//         <StyledNavbar.Brand href="/">Brand</StyledNavbar.Brand>
//         <StyledNavbar.Toggle
//           onClick={() => setExpanded(expanded ? false : 'expanded')}
//         />
//         <StyledNavbar.Collapse>
//           <Nav className="me-auto">
//             <Nav.Link href="#">Home</Nav.Link>
//             <Nav.Link href="#">About Us</Nav.Link>
//             {/* Industries Mega Menu */}
//             <StyledNavDropdown
//               title={
//                 <>
//                   Industries {showIndustriesDropdown ? <BsChevronUp /> : <BsChevronDown />}
//                 </>
//               }
//               id="industries-dropdown"
//               show={showIndustriesDropdown}
//               onMouseEnter={() => setShowIndustriesDropdown(true)}
//               onMouseLeave={() => setShowIndustriesDropdown(false)}
//             >
//               <div className="dropdown-content">
//                 <DropdownGroup>
//                   <DropdownTitle>Agriculture to Electronic Industries</DropdownTitle>
//                   <DropdownItems href="#"> Agriculture Industry</DropdownItems>
//                   <DropdownItems href="#">Apparel Industry</DropdownItems>
//                   <DropdownItems href="#">Automative Industry</DropdownItems>
//                   <DropdownItems href="#">Beverage Industry</DropdownItems>
//                   <DropdownItems href="#">Chemical Industry</DropdownItems>
//                   <DropdownItems href="#">Educational Institutes</DropdownItems>
//                   <DropdownItems href="#">Electric Industry</DropdownItems>
//                   <DropdownItems href="#">Electronic Industry</DropdownItems>
//                 </DropdownGroup>
//                 <DropdownGroup>
//                   <DropdownTitle>FMCG to Metal Fabrication Industry</DropdownTitle>
//                   <DropdownItems href="#">FMCG Industry</DropdownItems>
//                   <DropdownItems href="#">Food Industry</DropdownItems>
//                   <DropdownItems href="#">Furniture Industry</DropdownItems>
//                   <DropdownItems href="#">Garment Industry</DropdownItems>
//                   <DropdownItems href="#">Hydrolic Cylinders Industry</DropdownItems>
//                   <DropdownItems href="#">Jewellery Industry</DropdownItems>
//                   <DropdownItems href="#">Leather Industry</DropdownItems>
//                   <DropdownItems href="#">Logistic Industry</DropdownItems>
//                   <DropdownItems href="#">Medical Equipment Manufacturing Industry</DropdownItems>
//                   <DropdownItems href="#">Wood Industry</DropdownItems>
//                   <DropdownItems href="#">Wholesalers Industry</DropdownItems>
//                   <DropdownItems href="#">Metal Fabrication Industry</DropdownItems>
//                   <DropdownItems href="#">Micro Finance Industry</DropdownItems>
//                 </DropdownGroup>
//                 <DropdownGroup>
//                   <DropdownTitle>Oil & Gas Textile Industry</DropdownTitle>
//                   <DropdownItems href="#">Oil & Gas Industry</DropdownItems>
//                   <DropdownItems href="#">Packaging Industry</DropdownItems>
//                   <DropdownItems href="#">Paper Industry</DropdownItems>
//                   <DropdownItems href="#">Plastic Industry</DropdownItems>
//                   <DropdownItems href="#">Pharmaceutical Industry</DropdownItems>
//                   <DropdownItems href="#">Publishing Industry</DropdownItems>
//                   <DropdownItems href="#">Printing Industry</DropdownItems>
//                   <DropdownItems href="#">Pre Engineering Industry</DropdownItems>
//                   <DropdownItems href="#">Rubber Industry</DropdownItems>
//                   <DropdownItems href="#">Restaurant Industry</DropdownItems>
//                   <DropdownItems href="#"> Retail Industry</DropdownItems>
//                   <DropdownItems href="#">Steel Industry</DropdownItems>
//                   <DropdownItems href="#">Telecom Industry</DropdownItems>
//                   <DropdownItems href="#">Textile Industry</DropdownItems>
//                 </DropdownGroup>
//               </div>
//             </StyledNavDropdown>

//             {/* Products Mega Menu */}
//             <StyledNavDropdown
//               title={
//                 <>
//                   Products {showProductsDropdown ? <BsChevronUp /> : <BsChevronDown />}
//                 </>
//               }
//               id="products-dropdown"
//               show={showProductsDropdown}
//               onMouseEnter={() => setShowProductsDropdown(true)}
//               onMouseLeave={() => setShowProductsDropdown(false)}
//             >
//               <div className="dropdown-content">
//                 <DropdownGroup>
//                   <DropdownItems href="#">Tech Cloud ERP</DropdownItems>
//                   <DropdownItems href="#">Tech Cloud CRM</DropdownItems>
//                   <DropdownItems href="#">Tech Cloud POS</DropdownItems>
//                   <DropdownItems href="#">Tech Cloud Trading Software</DropdownItems>
//                   <DropdownItems href="#">Tech Cloud E-Commerce</DropdownItems>
//                   <DropdownItems href="#">Tech Cloud HRMS</DropdownItems>
//                   <DropdownItems href="#">Tech Cloud Finance</DropdownItems>
//                   <DropdownItems href="#">Tech Cloud ERP Integrated-With-CRM-E-Commerce-POS</DropdownItems>
//                   <DropdownItems href="#">Tech Cloud Restaurant ERP</DropdownItems>
//                   <DropdownItems href="#">Accounting Software</DropdownItems>
//                 </DropdownGroup>
//                 {/* Removed Hardware and Cloud Services sections */}
//               </div>
//             </StyledNavDropdown>
//             <Nav.Link href="#">BI</Nav.Link>

//             {/* Services Mega Menu */}
//             <StyledNavDropdown
//               title={
//                 <>
//                   Services {showServicesDropdown ? <BsChevronUp /> : <BsChevronDown />}
//                 </>
//               }
//               id="services-dropdown"
//               show={showServicesDropdown}
//               onMouseEnter={() => setShowServicesDropdown(true)}
//               onMouseLeave={() => setShowServicesDropdown(false)}
//             >
//               <div className="dropdown-content">
//                 <DropdownGroup>
//                   <DropdownItems href="#"> Digital Marketing</DropdownItems>
//                   <DropdownItems href="#"> Web Development</DropdownItems>
//                   <DropdownItems href="#">Mobile Application Development</DropdownItems>
//                 </DropdownGroup>
//                 {/* Removed Managed Services and Training sections */}
//               </div>
//             </StyledNavDropdown>
//             <Nav.Link href="#">Pricing</Nav.Link>
//             <Nav.Link href="#">Contact Us</Nav.Link>
//             <Nav.Link href="#">Demo</Nav.Link>
//           </Nav>
//         </StyledNavbar.Collapse>
//       </Container>
//     </StyledNavbar>
//   );
// };

// export default NavbarComponent;


//new updated one 

import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Dropdown, NavDropdown} from 'react-bootstrap';
import { IoCall } from "react-icons/io5";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaPinterest, FaYoutube } from 'react-icons/fa'; // Social media icons
import { FaXTwitter } from "react-icons/fa6";
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
                    alt="Indian flag"/>
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
          <SocialIcon href="https://www.instagram.com/techclouderp/?hl=en" target="_blank">
        <FaInstagram />
      </SocialIcon>
      <SocialIcon href="https://www.facebook.com/TechCloudERPSoftwareSolutions" target="_blank">
        <FaFacebookF />
      </SocialIcon>
      <SocialIcon href="https://www.linkedin.com/company/13619340/admin/feed/posts/" target="_blank">
        <FaLinkedinIn />
      </SocialIcon>
      <SocialIcon href="https://in.pinterest.com/techclouderp/" target="_blank">
        <FaPinterest />
      </SocialIcon>
      <SocialIcon href="https://www.youtube.com/channel/UChUCWRHTzZkYEPRR-AauNkA" target="_blank">
        <FaYoutube />
      </SocialIcon>
      <SocialIcon href="https://twitter.com/TechCloudERP" target="_blank">
        <FaXTwitter />
      </SocialIcon>
          </div>
        </MobileNavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
