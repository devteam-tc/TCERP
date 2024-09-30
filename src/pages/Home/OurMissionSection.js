import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { TiArrowRight } from "react-icons/ti";
import { releavant } from '../../utils/constants';

// Styled Components
const ExperienceSection = styled.section`
  padding-bottom: 90px;

  @media (max-width: 992px) {
    padding-bottom: 60px;
  }
`;

const ExperienceImageStyled = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 992px) {
    height: auto;
  }
`;

const ExperienceImageWrapper = styled.div`
  position: relative;
  width: 100%;
  // max-width: 50vh;

  .overlay-image {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 200px;
    height: 200px;
    // border-radius: 50%;
    border: 10px solid #fff; /* Optional border around the overlay image */
    border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 5s infinite linear%3B%7D%40keyframes stroke%7Bto%7Bstroke-dashoffset:776%3B%7D%7D%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%232d3561' /%3E%3Cstop offset='25%25' stop-color='%23c05c7e' /%3E%3Cstop offset='50%25' stop-color='%23f3826f' /%3E%3Cstop offset='100%25' stop-color='%23ffb961' /%3E%3C/linearGradient%3E %3Cpath d='M1.5 1.5 l97 0l0 97l-97 0 l0 -97' stroke-linecap='square' stroke='url(%23g)' stroke-width='3' stroke-dasharray='388'/%3E %3C/svg%3E") 1;
  }

  .text {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    background-color: #14c8f1;
    padding: 10px;
    border-radius: 10px;

    p {
      margin: 0;
      font-size: 14px;
      font-weight: 600;

      span {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }

  @media (max-width: 992px) {
    .overlay-image {
      width: 150px;
      height: 150px;
      bottom: 10px;
      right: 10px;
    }

    .text {
      font-size: 12px;
      padding: 8px;
    }
  }
`;

const ExperienceContent = styled.div`
  padding-left: 70px;

  span {
    color: #e93906;
    font-size: 20px;
    line-height: 30px;
    text-align: left;
    text-transform: uppercase;
    display: inline-block;
    font-weight: 600;
  }

  h2 {
    font-size: 18px;
    margin-top: 12px;
    margin-bottom: 14px;
  }

  p {
    margin-bottom: 0;
    text-align: justify;
  }

  @media (max-width: 992px) {
    padding-left: 15px;

    span {
      font-size: 18px;
    }
  }
`;

// React Component
const OurMissionSection = () => {
  const { images, content } = releavant.ourMission;

  return (
    <ExperienceSection>
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="mt-4">
            <ExperienceImageWrapper>
              <ExperienceImageStyled src={images.mainImage} alt="Experience" />
              <img
                src={images.experienceIcon}
                alt="Overlay Icon"
                className="overlay-image"
              />
              {/* <div className="text">
                <p>
                  <span>{content.experience.years}</span> {content.experience.text}
                </p>
              </div> */}
            </ExperienceImageWrapper>
          </Col>
          <Col lg={7} className="mt-4">
            <ExperienceContent>
              <span>{content.companyName}</span>
              <p>{content.description}</p>
              <div className="experience-text">
                <div className='mt-4'>
                  <h3 style={{color: '#05A7CC'}}>{content.missionTitle}</h3>
                  <p>{content.missionText}</p>
                </div>
              </div>
              <Button variant="primary" style={{ backgroundColor: '#e93906', borderRadius: '0px', border: 'none', marginTop: '2vh' }}>
                Read More 
                <TiArrowRight size={25}/>
              </Button>
            </ExperienceContent>
          </Col>
        </Row>
      </Container>
    </ExperienceSection>
  );
};

export default OurMissionSection;