import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { ExpertiseData } from '../../utils/constants'; 
import { Title } from "../Home/CardSection";

const SectionWrapper = styled.div`
  padding: 40px 0;
background: #F4FDFF;

`;
const IconWrapper = styled.div`
  font-size: 40px;
  color: #f26633;
    text-align:left;

  margin-bottom: 10px;
`;

const Line = styled.div`
  width: 177px;
  height: 4px;
  text-align:left;
  background-color: #00bcd4;
  margin: 10px 0;
`;

const CardWrapper = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Description = styled.p`
  color: #7a7a7a;
  text-align:left;
`;

const ExpertiseSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <Title className="text-center pt-4 pt-md-0">Focused Expertise for Your Business</Title>
        <Row>
          {ExpertiseData.map((item, index) => (
            <Col md={4} key={index}>
              <CardWrapper>
                <IconWrapper>
                  <item.icon />
                </IconWrapper>
                <h5 style={{ textAlign: 'left' }}>{item.title}</h5>
                <Line />
                <Description>{item.description}</Description>
              </CardWrapper>
            </Col>
          ))}
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default ExpertiseSection;
