import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { releavant } from "../../utils/constants";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import SocialMediaIcons from "../Navbar/SocialMediaIcons";

const FooterSection = styled.footer`
  background: #fffbfa;
  padding: 40px 0 0 0;
  color: #333;

  @media (max-width: 992px) {
    padding: 20px 0;
  }
`;

const Logo = styled.img`
  height: 80px;

  @media (max-width: 992px) {
    height: 60px;
  }
`;

const FooterHeading = styled.h5`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.03em;
  text-align: left;

  @media (max-width: 992px) {
    font-size: 18px;
  }
`;

const FooterText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 20px;
  text-align: left;

  @media (max-width: 992px) {
    font-size: 12px;
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

  @media (max-width: 992px) {
    padding: 0;
    text-align: center;

    li {
      font-size: 14px;
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

  @media (max-width: 992px) {
    font-size: 12px;
    padding: 15px 0;
  }
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
    align-items: flex-start;
    margin-bottom: 10px;
    font-size: 14px;

    svg {
      margin-right: 10px;
      font-size: 18px;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }

 
  }
`;

const Icon = styled.span`
  font-size: 18px;
  margin-top: -3px;
  margin-right: 2px;
`;

const FooterHeader = styled.h5`
  color: #ef5226;
`;

const obfuscateEmail = (user, domain, tld) => {
  return `${user}@${domain}.${tld}`;
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Obfuscated email data
  const corporateEmail = obfuscateEmail("info", "techclouderp", "com");
  const headquartersEmail = obfuscateEmail("contact", "techclouderp", "com");

  return (
    <FooterSection>
      <Container>
        <Row>
          <Col md={3} sm={12}>
            <Logo src={releavant.logo} alt="Tech Cloud ERP Logo" />
            <FooterText className="pt-3">
              Tech Cloud ERP delivers top-notch solutions tailored for any
              businesses, combining advanced technology, intuitive design, and
              comprehensive features.
            </FooterText>
            <SocialMediaIcons />
          </Col>
          <Col md={2} sm={6}>
            <FooterHeading>Useful Links</FooterHeading>
            <FooterLinkList>
              <li>
                <Link to="/" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" onClick={scrollToTop}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" onClick={scrollToTop}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/features" onClick={scrollToTop}>
                  Our Features
                </Link>
              </li>
              <li>
                <Link to="/" onClick={scrollToTop}>
                  Our Blogs
                </Link>
              </li>
              <li>
                <Link to="/ourbranches" onClick={scrollToTop}>
                  Our Branches
                </Link>
              </li>
              <li>
                <Link to="/all-products" onClick={scrollToTop}>
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/careers" onClick={scrollToTop}>
                  Careers
                </Link>
              </li>
            </FooterLinkList>
          </Col>
          <Col md={2} sm={6}>
            <FooterHeading>Industries</FooterHeading>
            <FooterLinkList>
              <li>
                <Link to="/all-industries" onClick={scrollToTop}>
                  All Industries
                </Link>
              </li>
              <li>
                <Link to="/industries/jewellery-industry" onClick={scrollToTop}>
                  Jewellery
                </Link>
              </li>
              <li>
                <Link to="/industries/pharma-industry" onClick={scrollToTop}>
                  Pharma
                </Link>
              </li>
              <li>
                <Link to="/industries/agriculture-industry" onClick={scrollToTop}>
                  Agriculture
                </Link>
              </li>
              <li>
                <Link to="/industries/beverage-industry" onClick={scrollToTop}>
                  Beverage
                </Link>
              </li>
              <li>
                <Link to="/industries/leather-industry" onClick={scrollToTop}>
                  Leather
                </Link>
              </li>
              <li>
                <Link to="/industries/textiles-industry" onClick={scrollToTop}>
                  Garment & Textile
                </Link>
              </li>
              <li>
                <Link to="/products/trading-software" onClick={scrollToTop}>
                  Tech Cloud Trading
                </Link>
              </li>
            </FooterLinkList>
          </Col>
          <Col md={2} sm={6}>
            <FooterHeading>Services</FooterHeading>
            <FooterLinkList>
              <li>
                <Link to="/all-services" onClick={scrollToTop}>
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/services/web-development" onClick={scrollToTop}>
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/e-commerce-website" onClick={scrollToTop}>
                  E-Commerce Website
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-application-development" onClick={scrollToTop}>
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" onClick={scrollToTop}>
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/whatsapp-business" onClick={scrollToTop}>
                  Whatsapp Business
                </Link>
              </li>
              <li>
                <Link to="/business-intelligence" onClick={scrollToTop}>
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link to="/web-hosting" onClick={scrollToTop}>
                  Web Hosting
                </Link>
              </li>
            </FooterLinkList>
          </Col>
          <Col md={3}>
            <FooterHeading>Get in Touch</FooterHeading>
            <ContactInfo>
              <FooterHeader>Corporate Office</FooterHeader>
              <p>
                <Icon>
                  <FaMapMarkerAlt />
                </Icon>
                Office Unit No. 705, Jain Sadguru Capital Park, Image Gardens
                Road, VIP Hills, Madhapur, Hyderabad, Telangana, India-500081.
              </p>
              <p>
                <Icon>
                  <FaEnvelope />
                </Icon>
                <a href={`mailto:${corporateEmail}`}>{corporateEmail}</a>
              </p>
              <p>
                <Icon>
                  <FaPhoneAlt />
                </Icon>
                +91 8919439603
              </p>
            </ContactInfo>
            <ContactInfo>
              <FooterHeader>Headquarters</FooterHeader>
              <p>
                <Icon>
                  <FaMapMarkerAlt />
                </Icon>
                1101, E Bell Street, Suite-E, Bloomington, Indiana, USA - 61701
              </p>
              <p>
                <Icon>
                  <FaEnvelope />
                </Icon>
                <a href={`mailto:${headquartersEmail}`}>{headquartersEmail}</a>
              </p>
              <p>
                <Icon>
                  <FaPhoneAlt />
                </Icon>
                +1 (312) 766-3390
              </p>
            </ContactInfo>
          </Col>
        </Row>
      </Container>
      <CopyrightText>
          &copy; 2024 Tech Cloud ERP.{" "}
          <Link
            to="/terms-and-conditions"
            style={{ color: "#ef5226", textDecoration: "none" }}
            onClick={scrollToTop}
          >
            Terms & Conditions
          </Link>{" "}
          |{" "}
          <Link
            to="/privacypolicy"
            style={{ color: "#ef5226", textDecoration: "none" }}
            onClick={scrollToTop}
          >
            Privacy Policy
          </Link>
        </CopyrightText>
    </FooterSection>
  );
};

export default Footer;
