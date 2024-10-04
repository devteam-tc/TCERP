import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { cardservicesData} from '../../utils/constants'
import { Title } from "../Home/CardSection";

const ServiceSection = styled.section`
  color: #8d97ad;
  font-weight: 300;

  h1, h2, h3, h4, h5, h6 {
    margin-top: 10px;
  }
`;

const ServiceCard = styled(Card)`
  width: 100% !important;
  box-shadow: rgba(173, 216, 230, 0.5) 0px 10px 20px, rgba(173, 216, 230, 0.7) 0px 6px 6px;
  border-radius: 11px !important;
  transition: 0.3s ease-out;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const CardHover = styled.div`
  background: none;
  text-align: center;
  cursor: pointer;
  padding: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #f9e2db;
    // box-shadow: 0px 4px 4px 0px var(--Primary-Primary200, #FAC5B7);
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

const Button = styled.button`
  color: #06db9a !important;
  background-color: transparent;
  border: 1px solid #06db9a;
  padding: 15px 45px;
  font-size: 16px;

  &:hover {
    background-color: #06db9a;
    color: #fff;
  }
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
