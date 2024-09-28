import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { industries } from '../utils/constants'; 

const SectionContainer = styled(Container)`
  text-align: center;
  padding: 50px 0;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  span {
    color: #f15a24; // Your highlight color
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #6c757d;
  margin-bottom: 40px;
`;

const IconBox = styled.div`
  text-align: center;
    border: 1px solid #8CD7E8;
    padding: 20px;
    border-left: 2px red solid;
    border-radius: 10px;
    margin-bottom: 20px;
    transition: all 0.3s;
  &:hover {
    background-color: #f8f9fa;
    transform: translateY(-5px);
  }
`;

const Icon = styled.div`
  font-size: 40px;
  color: #f15a24; // Icon color
  margin-bottom: 10px;
`;

const Label = styled.h5`
  font-size: 18px;
  font-weight: 500;
  color: #333;
`;

const TransformingIndustriesSection = () => {
  return (
    <SectionContainer>
      <Title>
        Transforming Data into Actionable Insights for <span>Industries Worldwide</span>
      </Title>
      <Description>
        Our business intelligence services are tailored to a wide range of industries, delivering the critical features needed to achieve maximum impact in each unique sector.
      </Description>
      <Row>
        {industries.map((industry, index) => (
          <Col xs={6} md={4} lg={3} key={index}>
            <IconBox>
              <Icon>{industry.icon}</Icon>
              <Label>{industry.label}</Label>
            </IconBox>
          </Col>
        ))}
      </Row>
    </SectionContainer>
  );
};

export default TransformingIndustriesSection;
