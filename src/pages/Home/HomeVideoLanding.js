import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { releavant } from '../../utils/constants'; 

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; 
`;

const BannerWrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const BannerTitle = styled.h1`
  font-size: 48px;
font-weight: 700;
text-align: center;

  @media (max-width: 992px) {
    font-size: 1.9rem;
  }
`;

const BannerSubtitle = styled.h2`
  font-weight: 700;
    text-align: center;
    font-size: 48px;

  @media (max-width: 992px) {
    font-size: 1.9rem;
  }
`;

const HomeVideoLanding = () => {
  return (
    <BannerWrapper>
      <VideoBackground autoPlay loop muted>
        <source src={releavant.bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Container>
        <BannerTitle>Innovate, Integrate, Excel</BannerTitle>
        <BannerSubtitle>The Era of ERP Solutions</BannerSubtitle>
        <p>Each click step software is the digital backbone of modern businesses, orchestrating efficiency, transparency, and growth in every operation.</p>
      </Container>
    </BannerWrapper>
  );
};

export default HomeVideoLanding;
