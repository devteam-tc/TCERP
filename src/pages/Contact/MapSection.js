import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Title } from '../Home/CardSection';
import { regions } from '../../utils/constants';

const StyledMap = styled.div`
  iframe {
    width: 100%;
    height: 250px;
  }
  padding: 20px;
  border-radius: 8px;
  box-shadow: rgba(173, 216, 230, 0.5) 0px 10px 20px, rgba(173, 216, 230, 0.7) 0px 6px 6px;
  margin: auto;
  border: 1px solid var(--Border-Default-Default, #D9D9D9);

  @media (max-width: 992px) {
    iframe {
      height: 200px; 
    }
  }
`;

const StyledTitle = styled(Title)`
  border-bottom: 2px solid #ef5226;
  padding-bottom: 10px; /* Add padding here to create a gap */
  margin-bottom: 20px; /* Adjust if you need more space */
`;

const MapSection = () => {
  return (
    <Container>
            <Title className="text-center pt-4 pt-md-0">Our Locations</Title>
      {regions.map((region, regionIndex) => (
        <div key={regionIndex}>
          <StyledTitle className="pt-4 pt-md-0" style={{ color: '#000' }}>{region.title}</StyledTitle>
          {/* First row with three columns */}
          <Row className="mb-3">
            {region.cities.slice(0, 3).map((city, index) => (
              <Col md={4} lg={4} key={index} className="mt-3">
                <StyledMap>
                  <iframe
                    title={`Map of ${city.name}`}
                    src={city.mapSrc}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <h3 className="mt-3 mb-3" style={{ textAlign: 'left', color: '#ef5226' }}>{city.name}</h3>
                </StyledMap>
              </Col>
            ))}
          </Row>

          {/* Second row with one column */}
          {region.cities.length > 3 && (
            <Row className="mb-5">
              <Col md={4} lg={4} className="mt-3">
                <StyledMap>
                  <iframe
                    title={`Map of ${region.cities[3].name}`}
                    src={region.cities[3].mapSrc}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <h3 className="mt-3 mb-3" style={{ textAlign: 'left', color: '#ef5226' }}>{region.cities[3].name}</h3>
                </StyledMap>
              </Col>
            </Row>
          )}
        </div>
      ))}
    </Container>
  );
};
export default MapSection;