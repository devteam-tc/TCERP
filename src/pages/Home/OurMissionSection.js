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

  .shape {
    position: absolute;
    top: -28px;
    left: -25px;
    z-index: -1;
  }

  @media (max-width: 992px) {
    .text {
      right: -30px;
      top: 140%;
      transform: translateY(-100%);
      width: 250px;
      height: 250px;

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

  .experience-text {
    margin-top: 30px;
    position: relative;
    padding-left: 50px;


    h3 {
      font-size: 20px;
      color: #000 !important;
      margin-bottom: 10px;
      font-weight: 500;
    }

    p {
      margin-bottom: 0;
    }
  }

  @media (max-width: 992px) {
    padding-left: 1px;

    span {
      font-size: 18px;
    }

    h2 {
      font-size: 16px;
    }

    .experience-text {
      padding-left: 20px;

      h3 {
        font-size: 18px;
      }
    }
  }
`;

// React Component
const OurMissionSection = () => {
  return (
    <ExperienceSection data-aos="fade" data-aos-delay="100">
      <Container data-aos="fade-up" data-aos-delay="100">
        <Row className="align-items-center" data-aos="fade-up" data-aos-delay="100">
          <Col lg={5} className="mt-4" data-aos="fade-up" data-aos-delay="100">
            <ExperienceImage>
              <img src={releavant.ourmission_img_1} alt="Experience" className='img-fluid'/>
              <div className="text">
                <img src={releavant.ourmission_img_2} alt="Experience icon" className='img-fluid'/>
                <p><span>25+</span> Years of Experience</p>
              </div>
            </ExperienceImage>
          </Col>
          <Col lg={7} className="mt-4" data-aos="fade-up" data-aos-delay="100">
            <ExperienceContent>
              <span>Tech Cloud ERP</span>
              <p>
                Tech Cloud ERP is a web-based solution for small and mid-sized businesses, acting as a
                central hub for tracking and analyzing departmental activities. It offers real-time data and
                integrated processes to accelerate decision-making and support growth, claiming to be
                India's leading ERP software developer with a focus on reducing operational costs, especially for
                manufacturing companies.
              </p>
              <p>
                Praised for affordability and ease of implementation, Tech Cloud ERP provides advanced
                features and customization options. Its user-friendly design enhances efficiency and productivity, making it a valuable investment for businesses aiming to improve their operations.
              </p>
              <div className="experience-text">
                <div>
                  <h3>Our Mission</h3>
                  <p>
                    Our mission is to help our clients respond faster and more efficiently to market
                    dynamics. We strive to make them more agile in a competitive marketplace through high-tech
                    strategies and action plans.
                  </p>
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
