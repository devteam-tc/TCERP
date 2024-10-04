import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { Title } from "../Home/CardSection";

const WhyTechCloudERPContainer = styled(Container)`
  padding: 50px 0;
  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const ImageContainer = styled.div`
  text-align: center;
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    color: #D9534F;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 28px;
      margin-bottom: 15px;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.8;
    color: #333;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 1.6;
    }
  }
`;

const WhyTechCloudERP = ({ content, title }) => {
  const { imageSrc, description } = content;

  return (
    <WhyTechCloudERPContainer>
      <Row className='align-items-center'>
        <Col md={6}>
          <ImageContainer>
            <img src={imageSrc} alt="TechCloud ERP Dashboard" />
          </ImageContainer>
        </Col>
        <Col md={6}>
          <TextContainer>
            <Title className='text-left'>{title}</Title>
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </TextContainer>
        </Col>
      </Row>
    </WhyTechCloudERPContainer>
  );
};

export default WhyTechCloudERP;
