// import { useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import Container from './Container';
// import { AlignJustify, Phone } from 'lucide-react';
// import MegaMenu from './MegaMenu';
// import MobileNavigationDrawer from './MobileNavigationDrawer';
// import { releavant } from '../utils/constants';
// import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
// import { FaXTwitter } from "react-icons/fa6";
// import styled from 'styled-components';
// import ReactCountryFlag from 'react-country-flag';

// const SocialMediaIcons = styled.div`
//   @media screen and (max-width: 996px) {
//     display: none;
//   }
// `;

// const SocialIcon = styled.a`
//   color: #000;
//   margin: 0 8px;
//   font-size: 22px;
//   &:hover {
//     ${({ href }) => {
//       if (href.includes('instagram')) return 'color: #E1306C;';
//       if (href.includes('facebook')) return 'color: #1877F2;';
//       if (href.includes('linkedin')) return 'color: #0077B5;';
//       if (href.includes('youtube')) return 'color: #FF0000;';
//       if (href.includes('twitter')) return 'color: #1DA1F2;';
//       return 'color: #000;';
//     }}
//   }
//   @media (max-width: 1200px) {
//     display: none;
//   }
// `;

// const PhoneDropdown = styled.div`
//   position: relative;
//   display: inline-block;

//   .dropdown-content {
//     display: ${({ showDropdown }) => (showDropdown ? 'block' : 'none')};
//     position: absolute;
//     background-color: white;
//     min-width: 150px;
//     margin-top: 0.2vh;
//     box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//     z-index: 1;
//     border-radius: 4px;
//     overflow: hidden;
//   }

//   .dropdown-item {
//     padding: 12px;
//     cursor: pointer;
//     display: flex;
//     align-items: center;

//     &:hover {
//       background-color: #f1f1f1;
//     }
    
//     span {
//       margin-left: 8px;
//     }
//   }

//   @media (max-width: 1200px) {
//     display: none;
//   }
// `;

// const Navigation = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [showPhoneDropdown, setShowPhoneDropdown] = useState(false);

//   const drawerButtonRef = useRef(null);

//   return (
//     <header className="nav__header">
//       <Container>
//         <div className="toolbar">
//           <Link className="logo__link" to={'/'}>
//             <img src={releavant.logo} style={{ height: '80px'}} alt='logoImg'/>
//           </Link>

//           <div className="hidden md:block">
//             <MegaMenu />
//           </div>

//           {/* Phone Dropdown */}
//           <SocialMediaIcons>
//             <PhoneDropdown
//               showDropdown={showPhoneDropdown}
//               onMouseEnter={() => setShowPhoneDropdown(true)}
//               onMouseLeave={() => setShowPhoneDropdown(false)}
//               onFocus={() => setShowPhoneDropdown(true)}
//               onBlur={() => setShowPhoneDropdown(false)}
//             >
//               <Phone size={24}/>
//               <div className="dropdown-content">
                // <div className="dropdown-item" href="tel:+9198929439603">
                //   <ReactCountryFlag countryCode="IN" svg style={{ width: '24px', height: '18px' }} />
                //   <span>+91 8929439603</span>
                // </div>
                // <div className="dropdown-item" href="tel:+13127663390">
                //   <ReactCountryFlag countryCode="US" svg style={{ width: '24px', height: '18px' }} />
                //   <span>+1 (312) 766-3390</span>
                // </div>
//               </div>
//             </PhoneDropdown>
//           </SocialMediaIcons>

//           <button
//             ref={drawerButtonRef}
//             className="menu_icon md:hidden"
//             aria-haspopup="true"
//             onClick={() => setIsDrawerOpen(true)}
//           >
//             {/* Mobile Hamburger menu */}
//             <AlignJustify />
//           </button>

//           {/* Social Media Icons */}
//           <SocialMediaIcons>
//             <SocialIcon href="https://www.instagram.com/techclouderp/?hl=en" target="_blank">
//               <FaInstagram />
//             </SocialIcon>
//             <SocialIcon href="https://www.facebook.com/TechCloudERPSoftwareSolutions" target="_blank">
//               <FaFacebookF />
//             </SocialIcon>
//             <SocialIcon href="https://www.linkedin.com/company/13619340/admin/feed/posts/" target="_blank">
//               <FaLinkedinIn />
//             </SocialIcon>
//             <SocialIcon href="https://www.youtube.com/channel/UChUCWRHTzZkYEPRR-AauNkA" target="_blank">
//               <FaYoutube />
//             </SocialIcon>
//             <SocialIcon href="https://twitter.com/TechCloudERP" target="_blank">
//               <FaXTwitter />
//             </SocialIcon>
//           </SocialMediaIcons>

//           {/* Mobile navigation drawer */}
//           <div className="md:hidden absolute">
//             <MobileNavigationDrawer
//               {...{ isDrawerOpen, setIsDrawerOpen, drawerButtonRef }}
//             />
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// };

// export default Navigation;


import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

import { AlignJustify, Phone } from 'lucide-react';
import MegaMenu from './MegaMenu';
import MobileNavigationDrawer from './MobileNavigationDrawer';
import { releavant } from '../../utils/constants';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import styled from 'styled-components';
import ReactCountryFlag from 'react-country-flag';

const SocialMediaIcons = styled.div`
  @media screen and (max-width: 996px) {
    display: none;
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
      if (href.includes('youtube')) return 'color: #FF0000;';
      if (href.includes('twitter')) return 'color: #1DA1F2;';
      return 'color: #000;';
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
    display: ${({ showDropdown }) => (showDropdown ? 'block' : 'none')};
    position: absolute;
    background-color: white;
    min-width: 150px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
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
    @media screen and (max-width: 996px){
      display: none;
      }
`;

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showPhoneDropdown, setShowPhoneDropdown] = useState(false);

  const drawerButtonRef = useRef(null);

  return (
    <header className="nav__header">
      <Container>
        <div className="toolbar">
          <Link className="logo__link" to={'/'}>
            <img src={releavant.logo} style={{ height: '80px'}} alt='logoImg'/>
          </Link>

          <div className="hidden md:block">
            <MegaMenu />
          </div>

          {/* Phone Dropdown */}
          <PhoneDropdown
            showDropdown={showPhoneDropdown}
            onClick={() => setShowPhoneDropdown(!showPhoneDropdown)}
          >
            <Phone size={24} />
            <div className="dropdown-content">
            <div className="dropdown-item" href="tel:+9198929439603">
                  <ReactCountryFlag countryCode="IN" svg style={{ width: '24px', height: '18px' }} />
                  <span>+91 8929439603</span>
                </div>
                <div className="dropdown-item" href="tel:+13127663390">
                  <ReactCountryFlag countryCode="US" svg style={{ width: '24px', height: '18px' }} />
                  <span>+1 (312) 766-3390</span>
                </div>
            
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
            <SocialIcon href="https://www.instagram.com" target="_blank">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://www.facebook.com" target="_blank">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com" target="_blank">
              <FaLinkedinIn />
            </SocialIcon>
            <SocialIcon href="https://www.youtube.com" target="_blank">
              <FaYoutube />
            </SocialIcon>
            <SocialIcon href="https://www.twitter.com" target="_blank">
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
  );
};

export default Navigation;
