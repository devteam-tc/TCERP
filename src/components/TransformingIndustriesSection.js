import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Title } from "../pages/Home/CardSection";
import { industryData } from "../utils/constants";

// Styled Components
const Section = styled.div`
  background-color: #f4faff;
  padding: 60px 0;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 40px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 items per row by default */
  grid-gap: 0px; /* No gaps between items */
  max-width: 1000px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr); /* 4 items per row on large tablets */
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr); /* 3 items per row on tablets */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 items per row on small tablets */
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr; /* 1 item per row on mobile */
  }
`;

const IndustryItem = styled.div`
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const IndustryIcon = styled.div`
  background-color: #ff5722;
  color: white;
  border-radius: 50%;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 24px;
  width: 60px;
  height: 60px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const IndustryTitle = styled.h6`
  font-size: 1rem;
  color: #333;
`;

const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 1px;
  height: 100%;
  background-color: #c3d9e7;
`;

const HorizontalLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #c3d9e7;
`;

const TransformingIndustriesSection = () => {
  const itemsPerRow = 5;

  return (
    <Section>
      <Container>
        <Title
          className="text-center pt-4 pt-md-0"
          style={{ fontSize: "30px" }}
        >
          Transforming Data into Actionable Insights for Industries Worldwide
        </Title>
        <Subtitle>
          Our business intelligence services are tailored to a wide range of
          industries, delivering critical features needed to achieve maximum
          impact.
        </Subtitle>
        <GridContainer>
          {industryData.map((industry, index) => (
            <IndustryItem key={index}>
              <IndustryIcon>{industry.icon}</IndustryIcon>
              <IndustryTitle>{industry.title}</IndustryTitle>

              {/* Add vertical line except for the last column */}
              {((index + 1) % itemsPerRow !== 0) && <VerticalLine />}

              {/* Add horizontal line except for the last row */}
              {index < industryData.length - itemsPerRow && <HorizontalLine />}
            </IndustryItem>
          ))}
        </GridContainer>
      </Container>
    </Section>
  );
};

export default TransformingIndustriesSection;
