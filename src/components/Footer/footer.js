import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import { releavant } from '../../utils/constants';
import { FaClock, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

// Styled Components
const FooterSection = styled.footer`
  background-color: #f6f8f9;
  padding: 40px 0;
  color: #333;
`;

const Logo = styled.img`
  height: 60px;
`;

const FooterHeading = styled.h5`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.03em;
  text-align: left;
`;

const FooterText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 20px;
  text-align: left;
`;

const ContactDetails = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;

  svg {
    margin-right: 10px;
    color: #ef5226;
    font-size: 20px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 8px;
      margin-bottom: 20px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: #EF5226;
    border-radius: 50%;
    color: white;
    font-size: 18px;
    transition: background-color 0.3s;
  }
`;
// const FooterBottom = styled.div`
//   text-align: center;
//   padding: 20px 0;
//   border-top: 1px solid #ccc;
//   margin-top: 30px;
//   font-size: 14px;

//   a {
//     color: inherit;
//     text-decoration: none;
//     margin: 0 10px;
//   }
// `;

const FooterLinkList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 500;
    line-height: 25.6px;
    letter-spacing: -0.03em;
    text-align: left;

    a {
      color: inherit;
      text-decoration: none;
      font-size: 14px;

      &:hover {
        text-decoration: none;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <Row>
          {/* Logo and Description */}
          <Col md={3} sm={12}>
            <Logo src={releavant.logo} alt="Legacy Insurance Brokers" />
            <FooterText className='pt-3'>
              Tech Cloud ERP delivers top-notch solutions tailored for any businesses, combining advanced technology, intuitive design, and comprehensive features.
            </FooterText>
            <SocialIcons>
              <Link to="/facebook">
                <FaFacebookF />
              </Link>
              <Link to="/twitter">
                <FaTwitter />
              </Link>
              <Link to="/linkedin">
                <FaLinkedinIn />
              </Link>
              <Link to="/instagram">
                <FaInstagram />
              </Link>
              <Link to="/pinterest">
                <FaPinterest />
              </Link>
              <Link to="/youtube">
                <FaYoutube />
              </Link>
            </SocialIcons>
          </Col>
          {/* Useful Links */}
          <Col md={2} sm={6}>
            <FooterHeading>Useful Links</FooterHeading>
            <FooterLinkList>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/ContactUs">Contact Us</Link></li>
            </FooterLinkList>
          </Col>
          {/* Softwares */}
          <Col md={2} sm={6}>
            <FooterHeading>Softwares / Industries</FooterHeading>
            <FooterLinkList>
              <li><Link to="#">Retail jewellery</Link></li>
              <li><Link to="#">Wholesale</Link></li>
              <li><Link to="#">Accounting</Link></li>
              <li><Link to="#">Tech Cloud POS</Link></li>
            </FooterLinkList>
          </Col>
          {/* Services */}
          <Col md={2} sm={6}>
            <FooterHeading>Services</FooterHeading>
            <FooterLinkList>
              <li><Link to="#">Web Development</Link></li>
              <li><Link to="#">Mobile Application</Link></li>
              <li><Link to="#">Digital Marketing</Link></li>
              <li><Link to="#">Whatsapp Business</Link></li>
            </FooterLinkList>
          </Col>
          {/* Get In Touch */}
          <Col md={3} sm={6}>
            <FooterHeading>Get In Touch
            </FooterHeading>
            <ContactDetails>
              <FaClock />
              9:30 AM - 9 PM, Monday – Saturday
            </ContactDetails>
            <ContactDetails>
              <FaEnvelope />
              <a href="mailto:info@techclouderp.com">info@techclouderp.com</a>
            </ContactDetails>
            <ContactDetails>
              <FaMapMarkerAlt />
              Office Unit No. 705, Jain Sadguru Capital Park, Image Gardens Road, VIP Hills, Madhapur, Hyderabad–500081.
            </ContactDetails>
          </Col>
        </Row>
        {/* Footer Bottom */}
        {/* <FooterBottom>
          <span>Copyright © 2024 Tech Cloud ERP</span>
          <Link to="/terms">Terms and Conditions</Link> | <Link to="/privacy">Privacy Policy</Link>
        </FooterBottom> */}
      </Container>
    </FooterSection>
  );
};

export default Footer;
