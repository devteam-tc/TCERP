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
    align-items: center;
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


const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <Row>
          {/* Logo and Description */}
          <Col md={3} sm={12}>
            <Logo src={releavant.logo} alt="Legacy Insurance Brokers" />
            <FooterText className="pt-5">
              Tech Cloud ERP delivers top-notch solutions tailored for any
              businesses, combining advanced technology, intuitive design, and
              comprehensive features.
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
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">All Industries</Link>
              </li>
              <li>
                <Link to="/ContactUs">Our features</Link>
              </li>
              <li>
                <Link to="/">Terms of service</Link>
              </li>
              <li>
                <Link to="/">Privacy policy</Link>
              </li>
              <li>
                <Link to="/">Our blogs</Link>
              </li>
            </FooterLinkList>
          </Col>
          {/* Industries */}
          <Col md={2} sm={6}>
            <FooterHeading>Industries</FooterHeading>
            <FooterLinkList>
              <li>
                <Link to="#">Jewellery</Link>
              </li>
              <li>
                <Link to="#">Pharma</Link>
              </li>
              <li>
                <Link to="#">Agriculture</Link>
              </li>
              <li>
                <Link to="#">Beverage</Link>
              </li>
              <li>
                <Link to="#">Leather</Link>
              </li>
              <li>
                <Link to="#">Garment & Textile</Link>
              </li>
              <li>
                <Link to="#">Techcloud trading</Link>
              </li>
            </FooterLinkList>
          </Col>
          {/* Services */}
          <Col md={2} sm={6}>
            <FooterHeading>Services</FooterHeading>
            <FooterLinkList>
              <li>
                <Link to="#">Web Development</Link>
              </li>
              <li>
                <Link to="#">E-Commerce website</Link>
              </li>
              <li>
                <Link to="#">Mobile App development</Link>
              </li>
              <li>
                <Link to="#">Digital marketing</Link>
              </li>
              <li>
                <Link to="#">Whatsapp business</Link>
              </li>
              <li>
                <Link to="#">Business intelligence</Link>
              </li>
              <li>
                <Link to="#">Web Hosting</Link>
              </li>
            </FooterLinkList>
          </Col>
          {/* Get In Touch */}
          <Col md={3}>
            <FooterHeading>Get in Touch</FooterHeading>
            <ContactInfo>
              <strong>Corporate Office</strong>
              <p>
                <FaMapMarkerAlt />
                Office Unit No. 705, Jain Sadguru Capital Park, Image Gardens
                Road, VIP Hills, Madhapur, Hyderabad, Telangana, India-500081.
              </p>
              <p>
                <FaEnvelope />
                Email:{" "}
                <a href="mailto:info@techclouderp.com">
                  info@techclouderp.com
                </a>
              </p>
              <p>
                <FaPhoneAlt />
                Phone: +91 8919439603
              </p>
            </ContactInfo>
            <ContactInfo>
              <strong>Headquarters</strong>
              <p>
                <FaMapMarkerAlt />
                1101, E Bell Street, Suite-E, Bloomington, Indiana, USA - 61701.
              </p>
              <p>
                <FaEnvelope />
                Email:{" "}
                <a href="mailto:info@techclouderp.com">
                  info@techclouderp.com
                </a>
              </p>
              <p>
                <FaPhoneAlt />
                Phone: +91 8919439603
              </p>
            </ContactInfo>
          </Col>
        </Row>
        <CopyrightText>
          &copy; 2024 Tech Cloud ERP. Terms & Conditions | Privacy Policy
        </CopyrightText>
      </Container>
    </FooterSection>
  );
};

export default Footer ;

