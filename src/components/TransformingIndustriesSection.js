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
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1000px; /* This will constrain the total width */
  margin: 0 auto;
`;

const IndustryItem = styled.div`
  flex: 0 0 calc(20% - 20px); /* 5 items per row with space between them */
  margin: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const Line = styled.div`
  width: 100%;
  border-top: 1px solid #c3d9e7;
  margin: 20px 0;
`;

const TransformingIndustriesSection = () => {
  return (
    <Section>
      <Container>
        <Title
          className="text-center pt-4 pt-md-0"
          style={{ fontSize: "30px" }}
        >
          Transforming Data into Actionable Insights for Industries Worldwide
        </Title>{" "}
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
            </IndustryItem>
          ))}
        </GridContainer>
        <Line />
      </Container>
    </Section>
  );
};

export default TransformingIndustriesSection;
