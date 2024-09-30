import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { essentialServicesData } from "../../utils/constants";

const SectionWrapper = styled.div`
  padding: 50px 0;
  background-color: #121212;
  color: white;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: #ff5722;
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 10px;
`;

const SectionSubtitle = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const CardWrapper = styled.div`
  background-color: #1f1f1f;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  text-align: left;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CardTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: white;
  margin-bottom: 15px;
`;

const CardText = styled.p`
  font-size: 16px;
  color: #bdbdbd;
`;

const CardIcon = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
  color: #ff5722;
`;

const EssentialServices = () => {
  return (
    <SectionWrapper>
      <Container>
        <SectionTitle>Essential Services for Modern Digital Marketing</SectionTitle>
        <SectionSubtitle>
          Essential digital marketing services include SEO, social media, PPC, content creation, email campaigns, and analytics for growth optimization.
        </SectionSubtitle>
        <Row>
          {essentialServicesData.map((service) => (
            <Col md={4} key={service.id}>
              <CardWrapper>
                <CardIcon>{service.icon}</CardIcon>
                <CardTitle>{service.title}</CardTitle>
                <CardText>{service.description}</CardText>
              </CardWrapper>
            </Col>
          ))}
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default EssentialServices;
