import React from 'react';
import styled from 'styled-components';
import { termsAndConditionsData, aboutus_data } from '../utils/constants'; 
import { Container, Row } from 'react-bootstrap';
import { ContentColumn, Description, Divider, Heading, Section } from './IndustryPage';

const StyledContainer = styled(Container)`
  padding: 2rem;
  .changetext {
    color: #e93906; /* Update color based on your design */
  }
`;

const StyledHeading = styled.h2`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const StyledListHeading = styled.h2`
  color: #e93906;
  font-size: 15px;
`;

const TermsAndConditions = () => {
  const { heading, description } = aboutus_data.termsAndConditionscontent;

  return (
    <>
      <Section>
        <Container>
          <Row>
            <ContentColumn md={6}>
              <Heading>{heading}</Heading>
              <Divider />
              <Description>{description}</Description>
            </ContentColumn>
          </Row>
        </Container>
      </Section>
      <StyledContainer className="privacy-policy">
        <StyledHeading>{termsAndConditionsData.title}</StyledHeading>
        <p>
          <em>{termsAndConditionsData.introduction}</em>
        </p>
        <StyledListHeading>
          Surfing this website is subject to the following terms of use:
        </StyledListHeading>
        <ul>
          {termsAndConditionsData.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </StyledContainer>
    </>
  );
};

export default TermsAndConditions;
