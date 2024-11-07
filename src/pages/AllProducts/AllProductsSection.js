import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ContentColumn, Description, Divider, Heading, Section } from '../../pages/IndustryPage';
import { aboutus_data } from '../../utils/constants';
import styled from 'styled-components';
import { modulesData } from '../../utils/constants';

// Styled Components
const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const StyledCard = styled(Card)`
  margin: 15px;
  border: none;
  box-shadow: rgba(173, 216, 230, 0.5) 0px 10px 20px,rgba(173, 216, 230, 0.7) 0px 6px 6px;
  height: 350px; /* Set a fixed height for all cards */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledCardBody = styled(Card.Body)`
  padding: 20px;
  flex-grow: 1; /* Ensures content area grows to fill available space */
`;

const StyledImage = styled(Card.Img)`
  height: 200px;
  width: 100%; /* Ensures the image covers the card width */
  object-fit: cover;
`;

const AllProductsSection = () => {
  return (
    <>
      <Section>
        <Container>
          <Row>
            <ContentColumn md={6}>
              <Heading>{aboutus_data.allproducts.heading}</Heading>
              <Divider />
              <Description>{aboutus_data.allproducts.description}</Description>
            </ContentColumn>
          </Row>
        </Container>
      </Section>
      <StyledContainer>
        <Row>
          {modulesData.map((module, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
              <StyledCard>
                <StyledImage variant="top" src={module.image} alt={module.title} />
                <StyledCardBody>
                  <Card.Title>{module.title}</Card.Title>
                  <Card.Text>{module.description}</Card.Text>
                </StyledCardBody>
              </StyledCard>
            </Col>
          ))}
        </Row>
      </StyledContainer>
    </>
  );
};

export default AllProductsSection;
