import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { featuresData } from '../utils/constants';
import { Title } from './Home/CardSection';
import { Container } from 'react-bootstrap';
import AnimatedSection from '../components/AnimatedUp';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

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
    li {
      button {
        &:before {
          font-size: 12px;
          color: #999; /* Set the default color for the dots */
        }
      }
    }
    /* Add custom styles for active dot */
    .slick-active {
      button {
        &:before {
          color: #ef5226; /* Active dot color */
        }
      }
    }
  }
`;


// Styled component for animated background
const AnimatedBackgroundSection = styled.div`
 background: #B2E4EF;
  padding: 50px 0;
`;
const CustomArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  z-index: 1;
  background: #ffffff2b;
  color: #ef5226;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transform: translateY(-50%);
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
const CardImage = styled.img`
  width: 100%;
  height: 250px; // Fixed height for the image
  object-fit: cover; // Maintain aspect ratio while covering the area
  border-radius: 8px;

  @media (max-width: 992px) {
    height: 200px; // Adjust height for smaller screens
  }

  @media (max-width: 768px) {
    height: 180px; // Adjust height for even smaller screens
  }

  @media (max-width: 576px) {
    height: 150px; // Adjust height for mobile devices
  }
`;
const CardTitle = styled.h5`
  margin: 15px 0;
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 992px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 576px) {
    font-size: 20px; // Smaller font on mobile devices
  }
`;

const CardText = styled.p`
  font-size: 13px;
  color: #666;

  @media (max-width: 992px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 576px) {
    font-size: 11px; // Smaller text for small devices
  }
`;

export const SubTitle = styled.p`
  display: block;
  margin: auto; // Optional: Add some margin for spacing
  text-align: center; // Center the text
  @media (max-width: 992px) {
    font-size: 1rem; 
    width:100% !important;
    padding: 1rem; 
  }
`;
const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 420px; // Fixed height for consistency
  min-height: 330px; // Ensure minimum height
  display: flex;
  flex-direction: column;
  justify-content: space-between; // Space between image and text
  cursor: pointer; // Change cursor to pointer on hover

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1200px) {
    width: 45vw;
    height: auto; // Use auto height for responsive scaling
  }

  @media (max-width: 992px) {
    width: 40vw;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 80vw; // Cards become wider on smaller screens
    height: auto;
  }

  @media (max-width: 576px) {
    width: 40vh !important;
    height: auto;
  }
`;
const StyledContainer = styled(Container)`
  background-color: #ffffff; /* White background */
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  padding: 20px;

  @media (max-width: 992px) {
    padding: 15px;
  }
`;
const StyledSection = styled.div`
  margin-top: 5rem;
  border-radius: 30px;
  width: 100%;  /* Take up full available width */
  max-width: 1421px;  /* Set a max width */
  height: 855px;
  border: 3px solid #FFF6F3;
  background: linear-gradient(109deg, rgba(250, 250, 250, 0.40) 3.06%, rgba(255, 247, 244, 0.40) 98.23%);
  
  /* Blur/Glass */
  backdrop-filter: blur(calc(var(--sds-size-blur-100) / 2));
  text-align: center;  /* Center-align the content */
  padding: 2rem 0;
  
  
  margin-left: auto; /* Center the section horizontally */
  margin-right: auto;

  @media (max-width: 992px) {
    margin-top: 3rem; /* Adjust for smaller screens */
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
  }

  @media (max-width: 576px) {
    margin-top: 1.5rem;
  }
`;


// Arrow Components
const PrevArrow = ({ onClick }) => (
  <CustomArrow style={{ left: '-45px' }} onClick={onClick}>
    <BiChevronLeft />
  </CustomArrow>
);

// Next Arrow Component
const NextArrow = ({ onClick }) => (
  <CustomArrow style={{ right: '-45px' }} onClick={onClick}>
    <BiChevronRight />
  </CustomArrow>
);
const ScrollFeatureCard = () => {
  const [pauseSlider, setPauseSlider] = useState(false);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
    <AnimatedBackgroundSection>
    <AnimatedSection id="hero" className="animated-section">
      <StyledSection className="mt-5" >
        <Title className="text-center pt-5">Unique Features</Title>
        <SubTitle className="w-50 mx-auto">
          Tech Cloud ERP provides an easy-to-use solution with smooth integration, powerful real-time analytics, and tools to help businesses improve operations, boost productivity, and make smarter decisions.
        </SubTitle>
        <Container  className="pb-5 mt-5">
          <SliderWrapper
            onMouseEnter={() => setPauseSlider(true)} // Pause slider on hover
            onMouseLeave={() => setPauseSlider(false)} // Resume slider on mouse leave
          >            <Slider {...sliderSettings}>
              {featuresData.map((card, index) => (
                <Card key={card.id} className="mb-5">
                  <CardImage src={card.imgSrc} alt={card.alt} />
                  <CardTitle>{card.title}</CardTitle>
                  <CardText>{card.description}</CardText>
                </Card>
              ))}
            </Slider>
          </SliderWrapper>
        </Container >
      </StyledSection>
    </AnimatedSection>
        </AnimatedBackgroundSection>

  );
};

export default ScrollFeatureCard;
