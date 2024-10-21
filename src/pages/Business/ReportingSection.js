// ReportingSection.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { ReportingSectionContent } from "../../utils/constants"; // Importing content
import { Title } from "../Home/CardSection";

const SubText = styled.p`
  color: #555555;
  font-size: 1rem;
  margin-top: 1rem;
`;

const HighlightText = styled.h4`
  color: #ff4500;
  font-weight: 500;
  font-size: 1.2rem;
`;

const StyledCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageCol = styled(Col)`
  img {
      width: 472.19px;
    height: 344px;

    border-radius: 8px;
  }

  @media (max-width: 992px) {
    display: flex;
    justify-content: center; // Center image on smaller screens
    img {
      width: 100%; // Adjust image width for smaller screens
    }
  }
`;


const ReportingSection = () => {
  const { subText, items, imageSrc, imageAlt } = ReportingSectionContent;

  return (
    <Container className="pt-5 pb-5">
      <Row className="mt-3 mb-3">
        {/* Left side: Text */}
        <StyledCol md={6}>
          <Title className="text-left">Upgrade your Reporting</Title>
          <SubText>{subText}</SubText>

          {items.map((item, index) => (
            <div key={index}>
              <HighlightText>{item.title}</HighlightText>
              <SubText>{item.description}</SubText>
            </div>
          ))}
        </StyledCol>

        {/* Right side: Image */}
        <ImageCol md={6}>
          <img src={imageSrc} alt={imageAlt} />
        </ImageCol>
      </Row>
    </Container>
  );
};

export default ReportingSection;
