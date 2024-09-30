import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sliderData } from '../../utils/constants';
import { Link } from 'react-router-dom'; 
// Styled Carousel Container
const StyledCarousel = styled(Slider)`
  .slick-slide {
    padding: 0 10px; // Add spacing between cards
  }
  .slick-prev, .slick-next {
    color: #ff5733;
  }
  .slick-dots li button:before {
    color: #ff5733;
  }
`;

// Styled Card Component
const StyledCard = styled(Card)`
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-top: 4px solid #ff5733;
  padding: 6px;
  text-align: center;
  height: 100%; // Ensure cards take up full height

  .card-title {
    font-weight: bold;
    font-size: 1.25rem;
  }

  .card-text {
    color: #666;
    font-size: 1rem;
    margin-bottom: 20px;
  }

  .explore-link {
    display: inline-flex;
    align-items: center;
    color: #ff5733;
    text-decoration:none;
    font-weight: bold;
    font-size: 1rem;
  }

  .explore-arrow {
    font-size: 1.5rem;
    margin-left: 5px;
  }
`;

const BusinessSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 cards at once
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992, // Tablet
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mt-5">
      <StyledCarousel {...settings}>
        {sliderData.map((item, index) => (
          <div key={index}>
            <StyledCard>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Link to={item.link} className="explore-link">  
                  {item.linkText} <span className="explore-arrow">→</span>
                </Link>
              </Card.Body>
            </StyledCard>
          </div>
        ))}
      </StyledCarousel>
    </div>
  );
};

export default BusinessSlider;
