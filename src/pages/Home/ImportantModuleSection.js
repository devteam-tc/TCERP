import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ModulecardsData } from '../../utils/constants';
import { Title } from './CardSection';
import { Container } from 'react-bootstrap';
// Styled Components for Slider
const SliderWrapper = styled.div`
  padding: 10px 0;

  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-track {
    display: flex;
    gap: 20px; // Adjust gap between slides as needed
  }

  .slick-dots {
    bottom: -30px; // Adjust dots position if needed
  }
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1200px) {
    width: 45vw; // Adjust width based on screen size
    height: auto; // Auto height for responsive scaling
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
    width: 90vw;
    height: auto;
  }
`;

const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const CardTitle = styled.h5`
  margin: 15px 0;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 992px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 576px) {
    font-size: 12px; // Smaller font on mobile devices
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


const ImportantModuleSection = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default to 4 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Time in milliseconds between slides
    responsive: [
      {
        breakpoint: 1200, // For screens below 1200px
        settings: {
          slidesToShow: 3, // Show 3 slides below 1200px
        },
      },
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 3, // Show 3 slides below 1024px
        },
      },
      {
        breakpoint: 992, // Smaller tablets
        settings: {
          slidesToShow: 2, // Show 2 slides below 992px
        },
      },
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1, // Show 1 slide below 768px
        },
      },
    ],
  };

  return (
    <div>
      <Title className="text-center pt-4 pt-md-0">Important Modules</Title>
      <Container className="mb-3">
        <SliderWrapper>
          <Slider {...sliderSettings}>
            {ModulecardsData.map((card) => (
              <Card key={card.id}>
                <CardImage src={card.image} alt={card.title} />
                <CardTitle>{card.title}</CardTitle>
                <CardText>{card.description}</CardText>
              </Card>
            ))}
          </Slider>
        </SliderWrapper>
      </Container>
    </div>
  );
};

export default ImportantModuleSection;