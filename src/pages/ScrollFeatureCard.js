// export default FeatureCard;
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { featuresData } from '../utils/constants';
import { Title } from './Home/CardSection';
import { Container } from 'react-bootstrap';

// Styled Components for Slider
export const SliderWrapper = styled.div`
  padding: 10px 0;

  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-track {
    display: flex;
    gap: 20px;
  }

  .slick-dots {
    bottom: -30px;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 420px;
  min-height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1200px) {
    width: 45vw;
    height: auto;
  }

  @media (max-width: 992px) {
    width: 40vw;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 80vw;
    height: auto;
  }

  @media (max-width: 576px) {
    width: 90vw;
    height: auto;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 992px) {
    height: 200px;
  }

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 576px) {
    height: 150px;
  }
`;

export const CardTitle = styled.h5`
  margin: 15px 0;
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 992px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const CardText = styled.p`
  font-size: 13px;
  color: #666;

  @media (max-width: 992px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 576px) {
    font-size: 11px;
  }
`;

export const SubTitle = styled.p`
  text-align: center;
    color: #6c757d;
      @media (max-width: 992px) {
    font-size: 1rem; 
    width:100% !important;
    padding: 1rem; 
  }
`;


const ScrollFeatureCard = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    rtl: true, // Ensures scrolling starts from left to right
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
    <>
   
    <div className='mt-5'>
        <Title className="text-center pt-5">Unique Features</Title>
        <SubTitle className='w-50 mx-auto'>Tech Cloud ERP provides an easy-to-use solution with smooth integration, powerful real-time analytics, and tools to help businesses improve operations, boost productivity, and make smarter decisions.</SubTitle>
        <Container className=" pb-5">
          <SliderWrapper>
            <Slider {...sliderSettings}>
              {featuresData.map((feature, index) => (
                <Card key={feature.id || `feature-${index}`} className='mb-5'>
                  <CardImage src={feature.imgSrc} alt={feature.alt} />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardText>{feature.description}</CardText>
                </Card>
              ))}
            </Slider>
          </SliderWrapper>
        </Container>
      </div>
      </>
  );
};
export default ScrollFeatureCard;
