import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { releavant } from "../../utils/constants";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

// Styled Components
const FooterSection = styled.footer`
  background: #fffbfa;
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

const SocialIcons = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    background-color: #ef5226;
    border-radius: 50%;
    color: white;
    font-size: 12px;
    transition: background-color 0.3s;
  }
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
            <SocialIcons>
              <Link to="/facebook" onClick={scrollToTop}>
                <FaFacebookF />
              </Link>
              <Link to="/twitter" onClick={scrollToTop}>
                <FaTwitter />
              </Link>
              <Link to="/linkedin" onClick={scrollToTop}>
                <FaLinkedinIn />
              </Link>
              <Link to="/instagram" onClick={scrollToTop}>
                <FaInstagram />
              </Link>
              <Link to="/pinterest" onClick={scrollToTop}>
                <FaPinterest />
              </Link>
              <Link to="/youtube" onClick={scrollToTop}>
                <FaYoutube />
              </Link>
            </SocialIcons>
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
                <Link to="/services" onClick={scrollToTop}>All Industries</Link>
              </li>
              <li>
                <Link to="/features" onClick={scrollToTop}>Our features</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" onClick={scrollToTop}>Terms of service</Link>
              </li>
              <li>
                <Link to="/privacypolicy" onClick={scrollToTop}>Privacy policy</Link>
              </li>
              <li>
                <Link to="/" onClick={scrollToTop}>Our blogs</Link>
              </li>
            </FooterLinkList>
          </Col>
          {/* Industries */}
          <Col md={2} sm={6}>
            <FooterHeading>Industries</FooterHeading>
            <FooterLinkList>
              <li>
                <Link to="/jewellery-industry" onClick={scrollToTop}>Jewellery</Link>
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
                <Link to="/products/trading-software" onClick={scrollToTop}>Techcloud trading</Link>
              </li>
            </FooterLinkList>
          </Col>
          {/* Services */}
          <Col md={2} sm={6}>
            <FooterHeading>Services</FooterHeading>
            <FooterLinkList>
              <li>
                <Link to="#" onClick={scrollToTop}>Web Development</Link>
              </li>
              <li>
                <Link to="#" onClick={scrollToTop}>E-Commerce website</Link>
              </li>
              <li>
                <Link to="#" onClick={scrollToTop}>Mobile App development</Link>
              </li>
              <li>
                <Link to="#" onClick={scrollToTop}>Digital marketing</Link>
              </li>
              <li>
                <Link to="#" onClick={scrollToTop}>Whatsapp business</Link>
              </li>
              <li>
                <Link to="#" onClick={scrollToTop}>Business intelligence</Link>
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
      </Container>
    </FooterSection>
  );
};
export default Footer;
