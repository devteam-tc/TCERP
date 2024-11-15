import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Title } from '../Home/CardSection';
import { regions } from '../../utils/constants';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
const StyledMap = styled.div`
  width: 300px; /* Set desired width */
  height: 500px; /* Set desired height */
  padding: 20px;
  border-radius: 8px;
  margin: auto;
  border: 1px solid var(--Border-Default-Default, #D9D9D9);
  box-shadow: rgba(173, 216, 230, 0.5) 0px 10px 20px, rgba(173, 216, 230, 0.7) 0px 6px 6px;

  iframe {
    width: 100%;
    height: 60%; /* Adjust iframe height as a percentage of the card */
  }

  @media (max-width: 992px) {
    width: 100%; 

    iframe {
      height: 55%; /* Adjust iframe height for smaller screens */
    }
  }
`;


const StyledTitle = styled(Title)`
  border-bottom: 2px solid #ef5226;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const CityInfo = styled.div`
  margin-top: 10px;
  text-align: left;
  color: #333;

  .info-item {
    display: flex;
    align-items: center;
    font-size:12px;
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
              <Col md={3} lg={3} key={index} className="mt-3">
                <StyledMap>
                  <iframe
                    title={`Map of ${city.name}`}
                    src={city.mapSrc}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <h5 className="mt-3 mb-3" style={{ textAlign: 'left', color: '#ef5226' }}>
                    {city.name}
                  </h5>
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
