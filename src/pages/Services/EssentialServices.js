import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

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
          <Col md={4}>
            <CardWrapper>
              <CardIcon>🔍</CardIcon>
              <CardTitle>Search Engine Optimization</CardTitle>
              <CardText>
                SEO is a process of enhancing the visibility of a website or a web page in a search engine's unpaid results—often referred to as "organic" or "natural" results.
              </CardText>
            </CardWrapper>
          </Col>
          <Col md={4}>
            <CardWrapper>
              <CardIcon>📈</CardIcon>
              <CardTitle>Search Engine Marketing</CardTitle>
              <CardText>
                SEM is a digital marketing strategy focused on promoting websites by increasing their visibility in search engine results pages (SERPs) through paid advertising.
              </CardText>
            </CardWrapper>
          </Col>
          <Col md={4}>
            <CardWrapper>
              <CardIcon>📱</CardIcon>
              <CardTitle>Social Media Optimization</CardTitle>
              <CardText>
                SMO can be an effective way to quickly increase website traffic, generate leads, and drive conversions, especially for businesses looking to achieve immediate results.
              </CardText>
            </CardWrapper>
          </Col>
          <Col md={4}>
            <CardWrapper>
              <CardIcon>📣</CardIcon>
              <CardTitle>Facebook Ads</CardTitle>
              <CardText>
                Facebook Ads helps businesses to create targeted campaigns to reach specific audiences on Facebook and Instagram, driving brand awareness.
              </CardText>
            </CardWrapper>
          </Col>
          <Col md={4}>
            <CardWrapper>
              <CardIcon>✏️</CardIcon>
              <CardTitle>Content Marketing</CardTitle>
              <CardText>
                Content marketing is a strategic marketing approach focused on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience.
              </CardText>
            </CardWrapper>
          </Col>
          <Col md={4}>
            <CardWrapper>
              <CardIcon>✉️</CardIcon>
              <CardTitle>Email Marketing</CardTitle>
              <CardText>
                Email marketing is a strategy focused on creating and distributing valuable relevant, and consistent content to attract and retain a clearly defined audience.
              </CardText>
            </CardWrapper>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default EssentialServices;
