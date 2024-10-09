import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { contactData } from '../../utils/constants';
import SocialMediaIcons from '../../components/Navbar/SocialMediaIcons';

export const IconContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;

  .icon {
    background-color: #EF5226;
    color: white;
    padding: 1vw;
    height: 60px;
    width: 60px;
    border-radius: 12%;
    margin-right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-container {
    display: flex;
    flex-direction: column;
  }

  .label {
    font-weight: 600;
    color: #000;
  }

  .details {
    margin-top: 4px;
    font-size: 14px;
    color: #333;
  }

  @media screen and (max-width: 992px) {
    .icon {
      height: 50px;
      width: 50px;
    }

    .details {
      font-size: 12px; /* Adjust for smaller screens */
    }
  }
`;

export const SectionTitle = styled.h5`
  font-size: 18px;
  font-weight: 600;
  color: #01C0E1;
  margin-top: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

export const StyledContainer = styled(Container)`
  padding: 100px 116px;

  h3 {
    color: #333;
    font-size: 38px;
    margin-bottom: 20px;
  }

  h3 span {
    color: #EF5226;
  }

  @media screen and (max-width: 992px) {
    padding: 50px 20px; /* Adjust padding for smaller screens */
    
    h3 {
      font-size: 28px; /* Adjust font size */
    }
  }
`;

const ContactFormContainer = styled.div`
  background: #fff;
  box-shadow: 0px 8px 12px 6px rgba(5, 167, 204, 0.20), 0px 4px 4px 0px #05A7CC;
  padding: 30px;
  border-radius: 10px;

  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 20px;
  }
`;

const LetsGetInTouch = styled.h6`
  color: #EF5226;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

const ContactForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', 'defer');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); 
    };
  }, []);

  return (
    <StyledContainer className='my-md-5'>
      <Row>
        <Col md={6} className="m-auto">
          <LetsGetInTouch>Let's Get in Touch</LetsGetInTouch>
          <h3>Drop a Message.<br /> Let's Engage..!</h3>

          <ul className='list-unstyled'>
            <SectionTitle>Corporate Office</SectionTitle>
            <IconContainer>
              <div className="icon">
                <FaMapMarkerAlt className='fs-3'/>
              </div>
              <div className="text-container">
                <span className="label">Address</span>
                <span className="details">{contactData.corporateOffice.address}</span>
              </div>
            </IconContainer>
            <IconContainer>
              <div className="icon">
                <FaPhoneAlt className='fs-3'/>
              </div>
              <div className="text-container">
                <span className="label">Phone Number</span>
                <span className="details">{contactData.corporateOffice.phoneNumber}</span>
              </div>
            </IconContainer>
            <IconContainer>
              <div className="icon">
                <FaEnvelope className='fs-3'/>
              </div>
              <div className="text-container">
                <span className="label">Email</span>
                <span className="details">{contactData.corporateOffice.email}</span>
              </div>
            </IconContainer>
          </ul>

          <ul className='list-unstyled'>
            <SectionTitle>Headquarters</SectionTitle>
            <IconContainer>
              <div className="icon">
                <FaMapMarkerAlt className='fs-3'/>
              </div>
              <div className="text-container">
                <span className="label">Address</span>
                <span className="details">{contactData.headquarters.address}</span>
              </div>
            </IconContainer>
            <IconContainer>
              <div className="icon">
                <FaPhoneAlt className='fs-3'/>
              </div>
              <div className="text-container">
                <span className="label">Phone Number</span>
                <span className="details">{contactData.headquarters.phoneNumber}</span>
              </div>
            </IconContainer>
            <IconContainer>
              <div className="icon">
                <FaEnvelope className='fs-3'/>
              </div>
              <div className="text-container">
                <span className="label">Email</span>
                <span className="details">{contactData.headquarters.email}</span>
              </div>
            </IconContainer>
          </ul>
          <ul className='list-unstyled'>
            <SectionTitle>Follow Us</SectionTitle>
            <SocialMediaIcons />
          </ul>
        </Col>

        <Col md={6}>
          <ContactFormContainer>
            <div className='elfsight-app-781289d2-3d2a-4085-8436-a5eb3b9bf3c1' data-elfsight-app-lazy></div>
          </ContactFormContainer>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default ContactForm;
