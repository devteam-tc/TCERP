import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const StyledMap = styled.div`
  iframe {
    width: 593px;
    height: 314px;
    border-top: 1px solid var(--Border-Default-Default, #D9D9D9);
  }

  /* Add box-shadow to the StyledMap */
     padding: 20px;
    border-radius: 8px;
    box-shadow: rgba(173, 216, 230, 0.5) 0px 10px 20px, rgba(173, 216, 230, 0.7) 0px 6px 6px;
    margin: auto;

  @media (max-width: 992px) {
    iframe {
      height: 300px; 
      width: 100%;
    }
  }
`;

const MapSection = () => {
  return (
    <Container>
      <Row className='mb-5'>
        <Col md={6} className='mt-3'>
          <StyledMap>
            <h3 className='mt-3 mb-3' style={{ textAlign: 'left', color: '#ef5226' }}>India</h3>
            <iframe
              title="Map of India"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.266681017522!2d78.3836060759407!3d17.446945501085104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb910d8d1c4f8b%3A0x6ef1b184af90fa3f!2sCapital%20Park!5e0!3m2!1sen!2sus!4v1715256757541!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </StyledMap>
        </Col>
        <Col md={6} className='mt-3'>
          <StyledMap>
            <h3 className='mt-3 mb-3' style={{ textAlign: 'left', color: '#ef5226' }}>USA</h3>
            <iframe
              title="Map of USA"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.133289688832!2d-88.98232162346754!3d40.47231615225344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b702b59fe7f7b%3A0x70f9e298d95bd2d0!2s1101%20E%20Bell%20St%20e%2C%20Bloomington%2C%20IL%2061701!5e0!3m2!1sen!2sus!4v1715256878347!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </StyledMap>
        </Col>
      </Row>
    </Container>
  );
};

export default MapSection;
