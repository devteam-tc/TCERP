import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Title } from '../Home/CardSection';
import { regions } from '../../utils/constants';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';


const StyledTitle = styled(Title)`
  border-bottom: 2px solid #ef5226;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const StyledMap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid var(--Border-Default-Default, #D9D9D9);
  box-shadow: rgba(173, 216, 230, 0.5) 0px 10px 20px, rgba(173, 216, 230, 0.7) 0px 6px 6px;
  
  iframe {
    width: 100%;  /* Ensures iframe width is 100% of its parent */
    height: 250px; /* Set a fixed height for the iframe */
    object-fit: cover; /* Ensure content fits inside the iframe without distortion */
  }

  h5 {
    margin-top: 0; /* Remove margin-top from the h5 */
    color: #ef5226;
    margin-bottom:0px !important;
    text-align: left;
  }

  @media (max-width: 1200px) {
    iframe {
      height: 250px; /* Keep iframe height consistent for screens up to 1200px */
    }
  }
`;


const CityInfo = styled.div`
  margin-top: 0; /* Remove margin-top to reduce space between the city name and the address */
  text-align: left;
  margin-bottom:0px !important;
  color: #333;

  .info-item {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin: 5px 0;
  }

  .icon {
    margin-right: 10px;
    color: #ef5226;
    font-size: 16px;
    min-width: 20px; /* Ensures consistent spacing */
  }
`;


const MapSection = () => {
  return (
    <Container>
      <Title className="text-center pt-4 pt-md-0">Our Locations</Title>
      {regions.map((region, regionIndex) => (
        <div key={regionIndex}>
          <StyledTitle className="pt-4 pt-md-0" style={{ color: '#000' }}>
            {region.title}
          </StyledTitle>
          <Row className="mb-3">
            {region.cities.map((city, index) => (
              <Col xs={12} sm={6} md={4} lg={3} xl={3} key={index} className="mt-3">
                <StyledMap>
                  <iframe
                    title={`Map of ${city.name}`}
                    src={city.mapSrc}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <h5 className='mt-2'>{city.name}</h5>
                  <CityInfo>
                    <div className="info-item">
                      <FaMapMarkerAlt className="icon" /> <span>{city.address}</span>
                    </div>
                    <div className="info-item">
                      <FaEnvelope className="icon" /> <span>{city.email}</span>
                    </div>
                    <div className="info-item">
                      <FaPhoneAlt className="icon" /> <span>{city.phone}</span>
                    </div>
                  </CityInfo>
                </StyledMap>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default MapSection;
