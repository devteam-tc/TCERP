// ReportingSection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { ReportingSectionContent } from '../../utils/constants';  // Importing content

const Heading = styled.h1`
  color: #FF4500;
  font-size: 2.5rem;
  font-weight: bold;
`;

const SubText = styled.p`
  color: #555555;
  font-size: 1rem;
  margin-top: 1rem;
`;

const HighlightText = styled.p`
  color: #FF4500;
//   font-weight: bold;
  font-size: 1.2rem;
//   margin-top: 1.5rem;
`;

const StyledCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageCol = styled(Col)`
  img {
    width: 100%;
    border-radius: 8px;
  }
`;

const ReportingSection = () => {
  const { heading, subText, items, imageSrc, imageAlt } = ReportingSectionContent;

  return (
    <Container >
      <Row>
        {/* Left side: Text */}
        <StyledCol md={6}>
          <Heading>{heading}</Heading>
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
