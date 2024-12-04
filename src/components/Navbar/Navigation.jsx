import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import { AlignJustify } from 'lucide-react';
import MegaMenu from './MegaMenu';
import MobileNavigationDrawer from './MobileNavigationDrawer';
import { releavant } from '../../utils/constants';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter, FaPinterest } from 'react-icons/fa6';
import styled from 'styled-components';
import ReactCountryFlag from 'react-country-flag';
import { FaPhone } from "react-icons/fa6";

const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 996px) {
    display: none;
  }
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 2px solid #000;
  border-radius: 50%;
  font-size: 13px;
  color: #000;
  transition: color 0.3s, border-color 0.3s;

  &:hover {
    ${({ href }) => {
      if (href.includes('instagram')) return 'color: #E1306C; border-color: #E1306C;';
      if (href.includes('facebook')) return 'color: #1877F2; border-color: #1877F2;';
      if (href.includes('pinterest')) return 'color: #E60023; border-color: #E60023;';
      if (href.includes('linkedin')) return 'color: #0077B5; border-color: #0077B5;';
      if (href.includes('youtube')) return 'color: #FF0000; border-color: #FF0000;';
      if (href.includes('twitter')) return 'color: #1DA1F2; border-color: #1DA1F2;';
      return 'color: #000; border-color: #000;';
    }}
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

const PhoneDropdown = styled.div`
  position: relative;
  display: inline-block;

  .dropdown-content {
    display: ${({ showdropdown }) => (showdropdown ? 'block' : 'none')};
    position: absolute;
    background-color: white;
    min-width: 150px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    overflow: hidden;
    margin-top: 1.5vh;
  }

  .dropdown-item {
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
      background-color: #f1f1f1;
    }
    
    span {
      margin-left: 8px;
    }
  }
  
  @media screen and (max-width: 996px) {
    display: none;
  }
`;

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showPhoneDropdown, setShowPhoneDropdown] = useState(false);
  const [isSticky, setIsSticky] = useState(false);  // State for sticky navbar
  const drawerButtonRef = useRef(null);
  const dropdownTimeout = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setShowPhoneDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setShowPhoneDropdown(false);
    }, 500);
  };

  // Add scroll event listener to set isSticky when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={isSticky ? 'sticky-navbar' : ''}>
    <header className="nav__header">
        <Container>
          <div className="toolbar">
            <Link className="logo__link" to={'/'}>
              <img src={releavant.logo} style={{ height: '80px' }} alt='Tech Cloud ERP Logo, leading ERP solutions provider in India' />
            </Link>
            <div className="hidden md:block">
              <MegaMenu />
            </div>
            {/* Phone Dropdown */}
            <PhoneDropdown
              showdropdown={showPhoneDropdown || undefined} // Explicitly pass undefined when false
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <FaPhone size={24} />
              <div className="dropdown-content">
                <a className="dropdown-item" href="tel:+9198929439603">
                  <ReactCountryFlag countryCode="IN" svg style={{ width: '24px', height: '18px' }} />
                  <span>+91 8929439603</span>
                </a>
                <a className="dropdown-item" href="tel:+13127663390">
                  <ReactCountryFlag countryCode="US" svg style={{ width: '24px', height: '18px' }} />
                  <span>+1 (312) 766-3390</span>
                </a>
              </div>
            </PhoneDropdown>
            <button
              ref={drawerButtonRef}
              className="menu_icon md:hidden"
              aria-haspopup="true"
              onClick={() => setIsDrawerOpen(true)}
            >
              {/* Mobile Hamburger menu */}
              <AlignJustify />
            </button>
            {/* Social Media Icons */}
            <SocialMediaIcons>
              <SocialIcon href="https://www.instagram.com/techclouderp/?hl=en" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon href="https://www.facebook.com/TechCloudERPSoftwareSolutions" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/company/13619340/admin/feed/posts/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </SocialIcon>
              <SocialIcon href="https://in.pinterest.com/techclouderp/" target="_blank" rel="noopener noreferrer">
                <FaPinterest />
              </SocialIcon>
              <SocialIcon href="https://www.youtube.com/channel/UChUCWRHTzZkYEPRR-AauNkA" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </SocialIcon>
              <SocialIcon href="https://twitter.com/TechCloudERP" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </SocialIcon>
            </SocialMediaIcons>
            {/* Mobile navigation drawer */}
            <div className="md:hidden absolute">
              <MobileNavigationDrawer
                {...{ isDrawerOpen, setIsDrawerOpen, drawerButtonRef }}
              />
            </div>
          </div>
        </Container>
    </header>
    </nav>

  );
};
export default Navigation;
