import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { sliderData } from '../../utils/constants';

// Styled Carousel Container
const StyledCarousel = styled(Slider)`
  .slick-slide {
    padding: 0 20px; // Add spacing between cards
  }
  .slick-prev,
  .slick-next {
    color: #ff5733;
  }
`;

// Styled Card Component
const StyledCard = styled(Card)`
  border: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-top: 4px solid #ff5733;
  text-align: center;
  height: 300px; // Set your desired height
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .card-title {
    font-weight: bold;
    font-size: 1.5rem; // Increase title size
    margin-top: 20px; // Add space above title
  }

  .card-text {
    color: #666;
    font-size: 1rem;
    margin: 10px 20px; // Add side margins for text
  }

  .explore-link {
    display: inline-flex;
    align-items: center;
    color: #ff5733;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem; // Increase link size
    margin-top: auto; // Push explore link to bottom
    margin-bottom: 20px; // Add space below link
  }

  .explore-arrow {
    font-size: 1.5rem;
    margin-left: 5px;
  }

  // Media query for responsiveness
  @media (max-width: 992px) {
    height: auto; // Adjust height as needed
    padding: 10px; // Adjust padding
  }
`;

// Styled custom dots
const DotsContainer = styled.div`
  text-align: center;
  margin-top: 20px;

  .custom-dot {
    display: inline-block;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: #ff5733; // Active color
    margin: 0 5px;
    cursor: pointer;

    &.active {
      background-color: #f1f1f1; // Inactive color
    }
  }
`;

const BusinessSlider = () => {
  const settings = {
    dots: false, // Disable default dots
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 cards at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: (dots) => (
      <DotsContainer>
        {dots.map((dot, index) => (
          <div
            key={index}
            className={`custom-dot ${index === 0 ? 'active' : ''}`}
            onClick={() => settings.slickGoTo(index)}
          />
        ))}
      </DotsContainer>
    ),
    responsive: [
      {
        breakpoint: 992, // Tablet
        settings: {
          slidesToShow: 2,
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
      <h2 className="text-center pt-4" style={{ fontSize: '24px' }}>
        Complete your business intelligence solution with products from across the Customer 360°
      </h2>
      <StyledCarousel {...settings}>
        {sliderData.map((item, index) => (
          <div key={index}>
            <StyledCard className="mb-3">
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
