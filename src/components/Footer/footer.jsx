import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { releavant } from "../../utils/constants";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import SocialMediaIcons from "../Navbar/SocialMediaIcons";

// Styled Components
const FooterSection = styled.footer`
  background: #fffbfa;
  padding: 40px 0 0 0;
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

const CopyrightText = styled.div`
  font-size: 12px;
  text-align: center;
  padding: 20px 0;
  color: #666;
  border-top: 1px solid #eaeaea;
  margin-top: 40px;
`;

const ContactInfo = styled.div`
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 10px;

  strong {
    display: block;
    font-size: 16px;
    margin-bottom: 10px;
  }

  p {
    display: flex;
    // align-items: center;
    align-items: flex-start;
    margin-bottom: 10px;
    font-size: 14px;

    svg {
      margin-right: 10px; /* Increase margin between icon and text */
      font-size: 18px; /* Slightly increase the size of the icons */
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;
const Icon = styled.span`
  font-size: 18px; /* Adjust this size as needed */
margin-top: -3px;
    margin-right: 2px;`;
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterSection>
      <Container>
        <Row>
          {/* Logo and Description */}
          <Col md={3} sm={12}>
            <Logo src={releavant.logo} alt="Legacy Insurance Brokers" />
            <FooterText className="pt-3">
              Tech Cloud ERP delivers top-notch solutions tailored for any
              businesses, combining advanced technology, intuitive design, and
              comprehensive features.
            </FooterText>
         <SocialMediaIcons />
          </Col>
          {/* Useful Links */}
          <Col md={2} sm={6}>
            <FooterHeading>Useful Links</FooterHeading>
            <FooterLinkList>
              <li>
                <Link to="/" onClick={scrollToTop}>Home</Link>
              </li>
              <li>
                <Link to="/about-us" onClick={scrollToTop}>About Us</Link>
              </li>
              <li>
                <Link to="/ContactUs" onClick={scrollToTop}>Contact Us</Link>
              </li>
              <li>
                <Link to="/features" onClick={scrollToTop}>Our Features</Link>
              </li>
              <li>
                <Link to="/" onClick={scrollToTop}>Our Blogs</Link>
              </li>
              <li>
                <Link to="OurBranches" onClick={scrollToTop}>Our Branches</Link>
              </li>
              <li>
                <Link to="/allproducts" onClick={scrollToTop}>All Products</Link>
              </li>
              <li>
                <Link to="/careers" onClick={scrollToTop}>Careers</Link>
              </li>
            </FooterLinkList>
          </Col>
          {/* Industries */}
          <Col md={2} sm={6}>
            <FooterHeading>Industries</FooterHeading>
            <FooterLinkList>
              <li>
                <Link to="/allindustries" onClick={scrollToTop}>All Industries</Link>
              </li>
              <li>
                <Link to="/industries/jewellery-industry" onClick={scrollToTop}>Jewellery</Link>
              </li>
              <li>
                <Link to="/pharma-industry" onClick={scrollToTop}>Pharma</Link>
              </li>
              <li>
                <Link to="/agriculture-industry" onClick={scrollToTop}>Agriculture</Link>
              </li>
              <li>
                <Link to="/beverage-industry" onClick={scrollToTop}>Beverage</Link>
              </li>
              <li>
                <Link to="/leather-industry" onClick={scrollToTop}>Leather</Link>
              </li>
              <li>
                <Link to="/textiles-industry" onClick={scrollToTop}>Garment & Textile</Link>
              </li>
              <li>
                <Link to="/products/trading-software" onClick={scrollToTop}>Tech Cloud Trading </Link>
              </li>
              
            </FooterLinkList>
          </Col>
          {/* Services */}
          <Col md={2} sm={6}>
            <FooterHeading>Services</FooterHeading>
            <FooterLinkList>
            <li>
                <Link to="/services" onClick={scrollToTop}>All Services</Link>
              </li>
              <li>
                <Link to="/services/web-development" onClick={scrollToTop}>Web Development</Link>
              </li>
              <li>
                <Link to="#" onClick={scrollToTop}>E-Commerce Website</Link>
              </li>
              <li>
                <Link to="/services/mobile-application-development" onClick={scrollToTop}>Mobile App Development</Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" onClick={scrollToTop}>Digital Marketing</Link>
              </li>
              <li>
                <Link to="#" onClick={scrollToTop}>Whatsapp Business</Link>
              </li>
              <li>
                <Link to="/business-intelligence" onClick={scrollToTop}>Business Intelligence</Link>
              </li>
              <li>
                <Link to="#" onClick={scrollToTop}>Web Hosting</Link>
              </li>
            </FooterLinkList>
          </Col>
          {/* Get In Touch */}
          <Col md={3}>
            <FooterHeading>Get in Touch</FooterHeading>
            <ContactInfo>
              <strong>Corporate Office</strong>
              <p>
                <Icon><FaMapMarkerAlt /></Icon>
                Office Unit No. 705, Jain Sadguru Capital Park, Image Gardens
                Road, VIP Hills, Madhapur, Hyderabad, Telangana, India-500081.
              </p>
              <p>
                <Icon><FaEnvelope /></Icon>
                Email:{" "}
                <a href="mailto:info@techclouderp.com">
                  info@techclouderp.com
                </a>
              </p>
              <p>
                <Icon><FaPhoneAlt /></Icon>
                Phone: +91 8919439603
              </p>
            </ContactInfo>
            <ContactInfo>
              <strong>Headquarters</strong>
              <p>
                <Icon><FaMapMarkerAlt /></Icon>
                1101, E Bell Street, Suite-E, Bloomington, Indiana, USA - 61701.
              </p>
              <p>
                <Icon><FaEnvelope /></Icon>
                Email:{" "}
                <a href="mailto:info@techclouderp.com">
                  info@techclouderp.com
                </a>
              </p>
              <p>
                <Icon><FaPhoneAlt /></Icon>
                Phone: +91 8919439603
              </p>
            </ContactInfo>
          </Col>
        </Row>
        {/* <CopyrightText>
          &copy; 2024 Tech Cloud ERP.{" "}
          <Link to="/terms-and-conditions" style={{ color: "#ef5226", textDecoration: "none" }} onClick={scrollToTop}>
            Terms & Conditions
          </Link>{" "}
          |{" "}
          <Link to="/privacypolicy" style={{ color: "#ef5226", textDecoration: "none" }} onClick={scrollToTop}>
            Privacy Policy
          </Link>
        </CopyrightText> */}
      </Container>
      <CopyrightText>
          &copy; 2024 Tech Cloud ERP.{" "}
          <Link to="/terms-and-conditions" style={{ color: "#ef5226", textDecoration: "none" }} onClick={scrollToTop}>
            Terms & Conditions
          </Link>{" "}
          |{" "}
          <Link to="/privacypolicy" style={{ color: "#ef5226", textDecoration: "none" }} onClick={scrollToTop}>
            Privacy Policy
          </Link>
        </CopyrightText>
    </FooterSection>
  );
};
export default Footer;
