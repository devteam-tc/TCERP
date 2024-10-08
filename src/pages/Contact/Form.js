import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { contactData } from '../../utils/constants';
import  SocialMediaIcons from '../../components/Navbar/SocialMediaIcons';

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
    font-weight: bold;
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
  }
`;

export const SectionTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #01C0E1; /* Blue color for the section title */
  margin-top: 20px;
  border-bottom: 1px solid #ccc; /* Line under the title */
  padding-bottom: 10px;
`;

export const StyledContainer = styled(Container)`
    padding: 100px 116px 100px 117px;
      h3 {
    color: #333;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  h3 span {
    color: #EF5226; /* Highlighted text */
  }
`;

const ContactFormContainer = styled.div`
  background: var(--Primary-Primary100, #FCE2DB);
  padding: 10px;
  width: 420px;
  height: 837px;
  border-radius: 10px;

  @media screen and (max-width: 992px) {
    width: 100%; // Adjust width to full on smaller screens
    height: auto; // Adjust height if necessary
    padding: 20px; // Adjust padding if needed
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
            <h3>Drop a Message.<br /> Let's Engage..!</h3>
            
            {/* Corporate Office Section */}
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
  
            {/* Headquarters Section */}
            <ul className='list-unstyled'>
              <SectionTitle>Headquarters</SectionTitle>
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
                  <FaMapMarkerAlt className='fs-3'/>
                </div>
                <div className="text-container">
                  <span className="label">Address</span>
                  <span className="details">{contactData.headquarters.address}</span>
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
            <SocialMediaIcons />
          </Col>
          
          {/* Right Column */}
          <Col md={6}>
            <ContactFormContainer>
              {/* Elfsight widget */}
              <div className='elfsight-app-781289d2-3d2a-4085-8436-a5eb3b9bf3c1' data-elfsight-app-lazy></div>
            </ContactFormContainer>
          </Col>
        </Row>
      </StyledContainer>
    );
  };
  
  export default ContactForm;
