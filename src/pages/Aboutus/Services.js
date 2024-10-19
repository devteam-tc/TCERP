import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { cardservicesData } from '../../utils/constants';
import { Title } from "../Home/CardSection";

const ServiceSection = styled.section`
  color: #8d97ad;
  padding: 40px 0px;
  font-weight: 300;

  h1, h2, h3, h4, h5, h6 {
    margin-top: 10px;
  }
`;

const ServiceCard = styled(Card)`
  width: 100% !important;
  box-shadow: rgba(173, 216, 230, 0.5) 0px 10px 20px, rgba(173, 216, 230, 0.7) 0px 6px 6px;
  border-radius: 11px !important;
  height: 120px; // Fixed height for the card
  transition: 0.3s ease-out;

  @media (max-width: 992px) {
    height: 120px; // Maintain fixed height for smaller screens
  }

  &:hover {
    transform: translateY(-10px);
  }
`;

const CardHover = styled.div`
  background: none;
  text-align: center;
  cursor: pointer;
  padding: 1rem;
  height: 100%; // Ensure this div takes full height of the card
  transition: background 0.3s ease;

  &:hover {
    background: #f9e2db;
    border-radius: 11px;

    .bg-success-grediant {
      color: #fff;
    }
  }
`;

const IconSpan = styled.span`
  background: linear-gradient(to right, #2cdd9b 0%, #1dc8cc 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 30px;
`;

const Services = () => {
  return (
    <ServiceSection>
      <Container>
        <Title className='text-center pt-4 pt-md-0'>All Your Business Needs</Title>
        <Row className="wrap-service-24">
          {/* Service Cards */}
          {cardservicesData.map((service, index) => (
            <Col xs={6} md={2} key={index} data-aos="fade-up" data-aos-delay="100">
              <ServiceCard className="mb-4 card-shadow border-0">
                <CardHover>
                  <IconSpan>
                    <img src={service.imgSrc} alt="" style={{ width: '45px' }} />
                  </IconSpan>
                  <h6 className="ser-title fs-6">{service.title}</h6>
                </CardHover>
              </ServiceCard>
            </Col>
          ))}
        </Row>
      </Container>
    </ServiceSection>
  );
};

export default Services;
