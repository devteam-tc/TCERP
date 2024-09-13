import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { releavant } from '../../utils/constants';

// Styled Components

const ExperienceSection = styled.section`
  padding-bottom: 90px;

  @media (max-width: 992px) {
    padding-bottom: 60px;
  }
`;
const ExperienceImageStyled = styled.img`
  height: auto; /* Maintain aspect ratio */
  
  @media (max-width: 992px) {
    height: auto;
  }
`;
const ExperienceImage = styled.div`
  position: relative;
  width:50vh;

  .text {
    position: absolute;
    right: -55px;
    top: 166%;
    transform: translateY(-120%);
    color: #ffffff;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    text-align: center; 

    p {
      color: #ffffff;
      line-height: initial;
      position: absolute;
      right: 0;
      left: 0;
      margin: auto;
      top: 45%;
      transform: translateY(-80%);
      font-size: 10px;
      font-weight: 400;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background-color: #14c8f1;

      span {
        display: block;
        font-size: 40px;
        line-height: 1.1;
        font-weight: bold;
        margin-top: 30px;
      }
    }

    img {
      font-size: 24px;
      border: 8px solid black;
      min-height: 3em;
      resize: both;
      border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 5s infinite linear%3B%7D%40keyframes stroke%7Bto%7Bstroke-dashoffset:776%3B%7D%7D%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%232d3561' /%3E%3Cstop offset='25%25' stop-color='%23c05c7e' /%3E%3Cstop offset='50%25' stop-color='%23f3826f' /%3E%3Cstop offset='100%25' stop-color='%23ffb961' /%3E%3C/linearGradient%3E %3Cpath d='M1.5 1.5 l97 0l0 97l-97 0 l0 -97' stroke-linecap='square' stroke='url(%23g)' stroke-width='3' stroke-dasharray='388'/%3E %3C/svg%3E") 1;
    }
  }


  @media (max-width: 992px) {
    .text {
     position: relative;
        right: 0px;
        bottom: 39px;
        transform: translateY(0%);
        height: 275px;
        left: 22px;
        top: 140%;
      p {
        font-size: 8px;
        width: 100px;
        height: 100px;

        span {
          font-size: 30px;
        }
      }
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

  
  }

  @media (max-width: 992px) {
    padding-left: 1px;

    span {
      font-size: 18px;
    }

    }
  }
`;

// React Component
const OurMissionSection = () => {
  const { images, content } = releavant.ourMission;

  return (
    <ExperienceSection >
      <Container >
        <Row className="align-items-center">
        <Col lg={5} className="mt-4">
  <ExperienceImage>
    <ExperienceImageStyled src={images.mainImage} alt="Experience" />
    <div className="text">
      <img src={images.experienceIcon} alt="Experience icon" />
      <p><span>{content.experience.years}</span> {content.experience.text}</p>
    </div>
  </ExperienceImage>
</Col>
          <Col lg={7} className="mt-4">
            <ExperienceContent>
              <span>{content.companyName}</span>
              <p>{content.description}</p>
              <div className="experience-text">
                <div>
                  <h3>{content.missionTitle}</h3>
                  <p>{content.missionText}</p>
                </div>
              </div>
            </ExperienceContent>
          </Col>
        </Row>
      </Container>
    </ExperienceSection>
  );
};

export default OurMissionSection;
