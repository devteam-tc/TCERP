import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { sliderData } from '../../utils/constants';
import { FaArrowRight } from 'react-icons/fa'; // Import the FaArrowRight icon
import { Title  as BaseTitle  } from '../Home/CardSection';
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
const Title = styled(BaseTitle)`
  font-size: 2.5rem; // Default size for larger screens
  text-align: center;

  @media (max-width: 992px) {
    font-size: 2rem; 
    line-height: 35px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem; 
  }

  @media (max-width: 576px) {
    font-size: 1.25rem; 
  }
`;
// Adjusted Styled Card Component
const StyledCard = styled(Card)`
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-top: 4px solid #ff5733;
  text-align: center;
  height: 280px; // Set a fixed height for the card
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%; // Ensure full height is used
  }

  .card-title {
    font-weight: 500;
    margin-top: 20px;
    overflow: hidden; // Prevent overflow
    text-align: left; // Align title to the left
  }

  .card-text {
    color: #666;
    font-size: 1rem;
    margin: 10px 0px;
    flex-grow: 1; // Allow text area to grow and take up space
    text-align: left; // Align text to the left
  }

  .explore-link {
    // display: flex;
    // justify-content: center;
    // align-items: center;
    color: #ff5733;
        text-align: right;
    // float: right;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.3rem;
    margin-top: auto;
    margin-bottom: 14px;
    transition: transform 0.3s ease;
  }

  .explore-link:hover {
    transform: translateX(5px);
  }

  .explore-arrow {
    font-size: 1.5rem;
    margin-left: 10px;
    transition: transform 0.3s ease;
  }

  // Media query for responsiveness
  @media (max-width: 992px) {
    height: auto; // Allow for dynamic height for smaller screens
    padding: 10px;

    .card-title {
      font-size: 1.25rem; // Adjust title size
    }

    .card-text {
      font-size: 0.9rem; // Adjust text size
      height: auto; // Allow for dynamic height
    }

    .explore-link {
      font-size: 1rem; // Adjust link size
    }
  }

  @media (max-width: 576px) {
    // Additional adjustments for mobile devices
    .card-title {
      font-size: 1.1rem; // Further adjust title size
    }

    .explore-link {
      font-size: 0.9rem; // Further adjust link size
    }
  }
`;


// Custom Dots Styling (optional)
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

// Styled Section Background
const SectionBackground = styled.div`
  background: #f8feff; 
  width: 100%; 
  // padding: 20px;
  padding:20px 0px 60px 0px;
  box-sizing: border-box; // Ensure padding is included in the total width
`;

const BusinessSlider = () => {
  const settings = {
    dots: false, // Disable default dots
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 cards at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
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
          slidesToShow: 2, // Show 2 cards for tablets
        },
      },
      {
        breakpoint: 576, // Mobile
        settings: {
          slidesToShow: 1, // Show 1 card for mobile
        },
      },
    ],
  };

  return (
    <SectionBackground>
      <div className="container mt-5">
        <Title className="text-center pt-4">
          Complete your business intelligence solution with products from across the Customer 360°
        </Title>
        <StyledCarousel {...settings}>
          {sliderData.map((item, index) => (
            <div key={index}>
              <StyledCard className="mb-3">
                <Card.Body>
                  <Card.Title style={{ alignItems: 'left' }}>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Link to={item.link} className="explore-link">
                    {item.linkText} <FaArrowRight className="explore-arrow" />
                  </Link>
                </Card.Body>
              </StyledCard>
            </div>
          ))}
        </StyledCarousel>
      </div>
    </SectionBackground>
  );
};

export default BusinessSlider;
