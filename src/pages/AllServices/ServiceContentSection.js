import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { servicesContent } from '../../utils/constants';
import AnimatedColumn from "../../components/AnimatedLeftRight";

// Styled components
const StyledContainer = styled(Container)`
  padding: 40px;
  border: 2px solid #e0f2f1;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  width: 100%;
  margin: 20px auto;

  @media (max-width: 992px) {
    padding: 20px;
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 75%;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ContentWrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 28px;
  color: #ef5226;
`;

const Description = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

const StyledButton = styled(Button)`
  background-color: #ef5226;
  border: none;
  padding: 6px 12px;
  border-radius: 20px;

  &:hover {
    background-color: #d65a3f;
  }
`;

// Main component
const ServiceContentSection = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = (serviceTitle) => {
    // Replace spaces with hyphens or create dynamic routes for each service
    const link = `/services/${serviceTitle.replace(/\s+/g, '-').toLowerCase()}`;

    // Navigate to the route and scroll to top
    navigate(link);
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling to the top
    });
  };

  const handleScrollTopClick = () => {
    // Scroll to the top without navigating
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling to the top
    });
  };

  return (
    <>
      {servicesContent.map((service, index) => (
        <StyledContainer key={index}>
          <Row className="align-items-center">
            <Col md={{ span: 6, order: index % 2 !== 0 ? 2 : 1 }}>
            <AnimatedColumn direction="left">
              <ImageWrapper>
                <img src={service.imageUrl} alt={service.title} />
              </ImageWrapper>
              </AnimatedColumn>
            </Col>
            <Col md={{ span: 6, order: index % 2 !== 0 ? 1 : 2 }}>
            <AnimatedColumn direction="right">
              <ContentWrapper>
                <Title>{service.title}</Title>
                <Description>{service.description1}</Description>
                <Description>{service.description2}</Description>
                <StyledButton 
                  onClick={() => {
                    handleReadMoreClick(service.title);
                    handleScrollTopClick(); // Scroll to top when clicking the button
                  }}
                >
                  {service.buttonText}
                </StyledButton>
              </ContentWrapper>
              </AnimatedColumn>
            </Col>
          </Row>
        </StyledContainer>
      ))}
    </>
  );
};

export default ServiceContentSection;
