// import React, { useEffect, useState } from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import CustomNavDropdown from './CustomNavDropdown';
// import styled from 'styled-components';
// import { NAV_ITEMS, releavant } from '../../utils/constants';

// const StyledNavLink = styled(Nav.Link)`
//   text-decoration: none;
//   color: black;
//   &:hover {
//     color: #e93906 !important;
//     text-decoration: none;
//   }
// `;

// const MainNavbar = () => {
//   const [calendlyLoaded, setCalendlyLoaded] = useState(false);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://assets.calendly.com/assets/external/widget.js';
//     script.type = 'text/javascript';
//     script.async = true;

//     script.onload = () => setCalendlyLoaded(true);

//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const openCalendlyWidget = () => {
//     if (calendlyLoaded && window.Calendly) {
//       window.Calendly.initPopupWidget({
//         url: 'https://calendly.com/dvignesh-techclouderp/demo',
//       });
//     } else {
//       console.error('Calendly script not loaded.');
//     }
//   };

//   const handleNavLinkClick = (item) => {
//     if (item.isDemo) {
//       openCalendlyWidget();
//     }
//   };

//   const renderNavItems = () => {
//     return NAV_ITEMS.map((item, index) => {
//       if (item.type === 'link') {
//         return (
//           <StyledNavLink
//             key={index}
//             to={item.link}
//             className={item.className || ''}
//             onClick={() => handleNavLinkClick(item)}
//           >
//             {item.title}
//           </StyledNavLink>
//         );
//       } else if (item.type === 'dropdown') {
//         return (
//           <CustomNavDropdown key={index} title={item.title} id={item.id}>
//             {item.items.map((subItem, subIndex) => {
//               if (subItem.type === 'dropdown') {
//                 return (
//                   <CustomNavDropdown key={subIndex} title={subItem.title} direction={subItem.direction}>
//                     {subItem.items.map((nestedItem, nestedIndex) => (
//                       <StyledNavLink key={nestedIndex} to={nestedItem.link} target="_blank">
//                         {nestedItem.title}
//                       </StyledNavLink>
//                     ))}
//                   </CustomNavDropdown>
//                 );
//               } else {
//                 return (
//                   <StyledNavLink key={subIndex} to={subItem.link} target="_blank">
//                     {subItem.title}
//                   </StyledNavLink>
//                 );
//               }
//             })}
//           </CustomNavDropdown>
//         );
//       }
//       return null;
//     });
//   };

//   return (
//     <Navbar expand="md" bg="light" variant="light" className="main-navbar fw-semibold">
//       <Container fluid>
//         <Navbar.Brand href="index.html">
//           <StyledNavLink to="/">
//             <img src={releavant.logo} style={{ width: '200px', padding: '2%' }} alt="logo" />
//           </StyledNavLink>
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="navbarSupportedContent" />
//         <Navbar.Collapse id="navbarSupportedContent">
//           <Nav className="mx-auto">{renderNavItems()}</Nav>
//         </Navbar.Collapse>

//         <div className="d-none d-md-block">
//           <a
//             href="tel:+8919439603"
//             className="btn cta-02 m-2"
//             style={{ border: '2px solid #04a8ce', borderRadius: '8px' }}
//           >
//             <img
//               src={releavant.us_flag_img}
//               id="imagep"
//               style={{ width: '25px', height: '25px', marginRight: '10px', borderRadius: '50%' }}
//               alt="US Flag"
//             />
//             +1 (312) 766-3390
//           </a>

//           <a
//             href="tel:+8919439603"
//             className="btn cta-01 m-2"
//             style={{ border: '2px solid #04a8ce', borderRadius: '8px' }}
//           >
//             <img
//               src={releavant.indian_flag_img}
//               id="imagep"
//               style={{ width: '25px', height: '25px', marginRight: '10px', borderRadius: '50%' }}
//               alt="Indian Flag"
//             />
//             +91 8919439603
//           </a>
//         </div>
//       </Container>
//     </Navbar>
//   );
// };

// export default MainNavbar;



import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavDropdown from './CustomNavDropdown';
import styled from 'styled-components';
import { NAV_ITEMS, releavant } from '../../utils/constants';

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: #e93906 !important;
    text-decoration: none;
  }
`;

const MainNavbar = () => {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

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

  const renderNavItems = () => {
    return NAV_ITEMS.map((item, index) => {
      if (item.type === 'link') {
        return (
          <StyledNavLink
            key={index}
            to={item.link}
            className={item.className || ''}
            onClick={() => handleNavLinkClick(item)}
          >
            {item.title}
          </StyledNavLink>
        );
      } else if (item.type === 'dropdown') {
        return (
          <CustomNavDropdown key={index} title={item.title} id={item.id}>
            {item.items.map((subItem, subIndex) => {
              if (subItem.type === 'dropdown') {
                return (
                  <CustomNavDropdown key={subIndex} title={subItem.title} direction={subItem.direction}>
                    {subItem.items.map((nestedItem, nestedIndex) => (
                      <StyledNavLink key={nestedIndex} to={nestedItem.link} target="_blank">
                        {nestedItem.title}
                      </StyledNavLink>
                    ))}
                  </CustomNavDropdown>
                );
              } else {
                return (
                  <StyledNavLink key={subIndex} to={subItem.link}>
                    {subItem.title}
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
    <Navbar expand="md" bg="light" variant="light" className="main-navbar fw-semibold">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={releavant.logo} style={{ width: '200px', padding: '2%' }} alt="logo" />
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
              alt="US Flag"
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
              alt="Indian Flag"
            />
            +91 8919439603
          </a>
        </div>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
