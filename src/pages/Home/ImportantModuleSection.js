import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { cardsData } from '../../utils/constants';
import { Container } from 'react-bootstrap';

// Styled Components for Slider
const SliderWrapper = styled.div`
  width: 100%;
  padding: 40px 0;
  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-dots {
    bottom: -30px; // Adjust dots position if needed
  }
`;

const Card = styled.div`
  width: 300px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin: 0 15px; // Adding margin to create space between cards

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
`;

const CardTitle = styled.h5`
  margin: 15px 0;
  font-size: 18px;
  font-weight: bold;
`;

const CardText = styled.p`
  font-size: 14px;
  color: #666;
`;

const ImportantModuleSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 slides at a time
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time in milliseconds between slides
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
    <Container>
      <SliderWrapper>
        <Slider {...sliderSettings}>
          {cardsData.map((card) => (
            <Card key={card.id}>
              <CardImage src={card.image} alt={card.title} />
              <CardTitle>{card.title}</CardTitle>
              <CardText>{card.description}</CardText>
            </Card>
          ))}
        </Slider>
      </SliderWrapper>
    </Container>
  );
};

export default ImportantModuleSection;
