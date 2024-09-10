import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { releavant } from '../../utils/constants';

// Styled Components
const SectionWrapper = styled.section`
  padding: 60px 0;
  background-color: #ffffff;
`;

const Heading = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #ef5226;
  line-height: 1.4;
  margin-bottom: 20px;
`;

const SubText = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 30px;
`;

const MissionText = styled.h4`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-top: 40px;
`;

const ReadMoreButton = styled(Button)`
  background-color: #ef5226;
  border: none;
  font-size: 16px;
  padding: 10px 20px;
  &:hover {
    background-color: #d44b1f;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const MainImage = styled.img`
//   width: 100%;
  border-radius: 15px;
`;

const ExperienceImageWrapper = styled.div`
 position: absolute;
    bottom: -87px;
    right: 100px;
    width: 200px;
    height: 250px;
    border-radius: 15px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SecondaryImage = styled.img`
//   width: 100px;
  margin-bottom: 10px;
`;

const ExperienceText = styled.p`
 color: #333;
    line-height: initial;
    position: absolute;
    right: 0;
    margin: auto;
    transform: translateY(-80%);
    font-size: 16px;
    font-weight: 400;
    border-radius: 50%;
    background-color: #14c8f1;
    width: 122px;
    height: 122px;
    top: 163px;
    left: 2px;
    text-align: center;
  span {
   display: block;
    line-height: 1.1;
    font-weight: bold;
    margin-top: 40px;
  }
`;

// Component
const OurMissionSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <Row>
          {/* Left Column (Image) */}
          <Col md={6}>
            <ImageWrapper>
              <MainImage src={releavant.ourmission_img_1}alt="Tech Cloud ERP" />
              <ExperienceImageWrapper>
                <SecondaryImage src={releavant.ourmission_img_2}alt="Experience" />
                <ExperienceText>
                  <span>25+ Years of Experience</span> 
                </ExperienceText>
              </ExperienceImageWrapper>
            </ImageWrapper>
          </Col>

          {/* Right Column (Text) */}
          <Col md={6}>
            <Heading>Tech Cloud ERP</Heading>
            <SubText>
              Tech Cloud ERP is a web-based solution for small and mid-sized businesses, acting as a central hub for tracking and analyzing departmental activities. It offers real-time data and integrated processes to accelerate decision-making and support growth, claiming to be India’s leading ERP software developer with a focus on reducing operational costs, especially for manufacturing companies.
            </SubText>
            <MissionText>Our Mission</MissionText>
            <SubText>
              Our mission is to help our clients respond faster and more efficiently to market dynamics. We strive to make them more agile in a competitive marketplace through high-tech strategies and action plans.
            </SubText>
            <ReadMoreButton>Read more</ReadMoreButton>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default OurMissionSection;
