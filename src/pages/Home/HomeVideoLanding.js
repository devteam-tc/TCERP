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

const BannerContent = styled.div`
background: rgb(0,0,0);
backdrop-filter: blur(3px);
background: linear-gradient(150deg, rgba(0,0,0,0.6418942577030813) 0%, rgba(1,1,5,0.4458158263305322) 22%, rgba(5,167,204,0.35057773109243695) 52%, rgba(4,137,168,0.23012955182072825) 66%, rgba(1,1,5,0.6502976190476191) 100%);
  padding: 40px;
  border-radius: 10px; /* Optional: Adds rounded corners */
`;

const BannerTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #ef5226;

  @media (max-width: 992px) {
    font-size: 1.9rem;
  }
`;

const BannerSubtitle = styled.h2`
  font-weight: 700;
  font-size: 48px;
  color: #ef5226;

  @media (max-width: 992px) {
    font-size: 1.9rem;
  }
`;

const BannerText = styled.p`
  font-size: 18px;

  @media (max-width: 992px) {
    font-size: 1rem;
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
        <BannerContent>
          <BannerTitle>Innovate, Integrate, Excel</BannerTitle>
          <BannerSubtitle>The Era of ERP Solutions</BannerSubtitle>
          <BannerText>Each click step software is the digital backbone of modern businesses, orchestrating efficiency, transparency, and growth in every operation.</BannerText>
        </BannerContent>
      </Container>
    </BannerWrapper>
  );
};

export default HomeVideoLanding;
