import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

export const Section = styled.section`
  opacity: var(--sds-size-stroke-border);
  background: linear-gradient(90deg, #AA3A1B 42.97%, #44170B 100%);
  padding: 90px 0;
  color: white;
  text-align: left;
  
  @media (max-width: 1200px) {
    height: 450px; 
  }

  @media (max-width: 992px) {
    padding: 30px 0;
    height: 400px; 
  }

  @media (max-width: 768px) {
    height: 350px; 
  }

  @media (max-width: 576px) {
    height: auto;
  }
`;

export const Heading = styled.h2`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 992px) {
    font-size: 28px;
    margin-bottom: 15px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 30px;

  @media (max-width: 992px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const Divider = styled.div`
  width: 50px;
  height: 3px;
  background-color: #00e8ff;

  @media (max-width: 992px) {
    margin-top: 8px;
  }
`;

export const ContentColumn = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--Spacing-ml, 15px); 

  @media (max-width: 992px) {
    width: 100%; 
  }
`;

const IndustryPage = ({ data }) => {
  const { heading, description } = data;

  return (
    <Section>
      <Container>
        <Row>
          <ContentColumn md={6}>
            <Heading>{heading}</Heading>
            <Divider />
            <Description>{description}</Description>
          </ContentColumn>
        </Row>
      </Container>
    </Section>
  );
};

export default IndustryPage;
