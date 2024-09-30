import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { Title } from "../Home/CardSection";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sliderData } from '../../utils/constants';
import { Link, useNavigate } from 'react-router-dom'; 

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
  height: 265px; // Set your desired height
  width: 250px;  // Set your desired width

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
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
  }

  .explore-arrow {
    font-size: 1.5rem;
    margin-left: 5px;
  }

  // Media query for responsiveness
  @media (max-width: 992px) {
    height: auto; // Adjust height as needed
    width: auto;  // Adjust width for smaller screens
    margin: 0 auto; // Center cards
    padding: 10px; // Adjust padding
  }
`;

const BusinessSlider = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 cards at once
    slidesToScroll: 1,
    autoplay: true,
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

  const handleLinkClick = (e, link) => {
    e.preventDefault(); // Prevent default link behavior
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
    setTimeout(() => {
      navigate(link); // Use navigate to redirect after scrolling
    }, 300); // Wait for the scroll to finish before redirecting
  };

  return (
    <div className="container mt-5">
      <Title className="text-center pt-4 pt-md-0" style={{ fontSize: '25px' }}>
        Complete your business intelligence solution with products from across the Customer 360°
      </Title>
      <StyledCarousel {...settings}>
        {sliderData.map((item, index) => (
          <div key={index}>
            <StyledCard className='mb-3'>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Link 
                  to={item.link} 
                  className="explore-link" 
                  onClick={(e) => handleLinkClick(e, item.link)}
                >
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
