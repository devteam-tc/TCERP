import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ContentColumn, Description, Divider, Heading, Section } from '../../pages/IndustryPage';
import { aboutus_data } from '../../utils/constants';
import styled from 'styled-components';
import { modulesData } from '../../utils/constants';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AnimatedColumn from '../../components/AnimatedLeftRight';
import AnimatedSection from '../../components/AnimatedUp';

// Styled Components
const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 992px) {
    padding: 10px;
  }
`;

const StyledCard = styled(Card)`
  margin: 15px;
  border: none;
  box-shadow: rgba(173, 216, 230, 0.5) 0px 10px 20px, rgba(173, 216, 230, 0.7) 0px 6px 6px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 992px) {
    height: 350px;
    margin: 10px;
  }
`;

const StyledCardBody = styled(Card.Body)`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 992px) {
    padding: 15px;
  }
`;

const StyledImage = styled(Card.Img)`
  height: 200px;
  width: 100%;
  object-fit: cover;

  @media (max-width: 992px) {
    height: 150px;
  }
`;

const StyledHeading = styled(Heading)`
  font-size: 2rem;

  @media (max-width: 992px) {
    font-size: 1.5rem;
  }
`;

const StyledDescription = styled(Description)`
  font-size: 1.2rem;

  @media (max-width: 992px) {
    font-size: 1rem;
  }
`;

const ExploreLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.1rem;
  color: #ef5226;
  margin-top: 10px;
font-weight: 600;
  .explore-arrow {
    margin-left: 5px;
    font-size: 1.2rem;
  }

  @media (max-width: 992px) {
    font-size: 1rem;
  }
`;

const AllProductsSection = () => {
  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Section>
        <Container>
          <Row>
            <ContentColumn md={6}>
              <AnimatedColumn direction="left">
              <StyledHeading>{aboutus_data.allproducts.heading}</StyledHeading>
              <Divider />
              <StyledDescription>{aboutus_data.allproducts.description}</StyledDescription>
              </AnimatedColumn>
            </ContentColumn>
          </Row>
        </Container>
      </Section>
      <StyledContainer>
        <Row>
          {modulesData.map((module, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
              <AnimatedSection className="animated-section">
              <StyledCard>
                <StyledImage variant="top" src={module.image} alt={module.title} />
                <StyledCardBody>
                  <Card.Title>{module.title}</Card.Title>
                  <Card.Text>{module.description}</Card.Text>
                  <ExploreLink
                    to={module.link}
                    className="explore-link"
                    onClick={scrollToTop}
                  >
                    {module.linkText} <FaArrowRight className="explore-arrow" />
                  </ExploreLink>
                </StyledCardBody>
              </StyledCard>
              </AnimatedSection>
            </Col>
          ))}
        </Row>
      </StyledContainer>
    </>
  );
};

export default AllProductsSection;
