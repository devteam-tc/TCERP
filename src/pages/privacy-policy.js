import React from 'react';
import styled from 'styled-components';
import {  aboutus_data } from '../utils/constants'; 
import { Container, Row , Col , Card} from 'react-bootstrap';
import { ContentColumn, Description, Divider, Heading, Section } from './IndustryPage';
import { privacyPolicyData } from '../utils/constants';

const StyledContainer = styled(Container)`
  margin-top: 2rem;
  margin-bottom: 2rem;

  .changetext {
    color: #000; // Customize your heading color
  }

  ul {
    line-height: 1.5;
  }

  strong {
    margin-top: 1rem;
    display: block;
  }

  .note {
    color: #000;
    font-weight: bold;
  }
`;
const PrivacyPolicy = () => {
  const { heading, description } = aboutus_data.privacypolicycontent;

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
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h2 className="mt-4 mb-4 changetext">{privacyPolicyData.title}</h2>
              <p>
                <em>{privacyPolicyData.introduction}</em>
              </p>
              <strong>{privacyPolicyData.dataCollection.title}</strong>
              <p>{privacyPolicyData.dataCollection.description}</p>
              <ul>
                {privacyPolicyData.dataCollection.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <p>{privacyPolicyData.dataSecurity.content}</p>
              <strong>{privacyPolicyData.changesPolicy.title}</strong>
              <p>{privacyPolicyData.changesPolicy.content}</p>
              <strong>{privacyPolicyData.contactDetails.title}</strong>
              <p>{privacyPolicyData.contactDetails.content}</p>
              <strong>{privacyPolicyData.termsConditions.title}</strong>
              <p>{privacyPolicyData.termsConditions.content}</p>
              <p className="note">
                <strong>{privacyPolicyData.note}</strong>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </StyledContainer>
    </>
  );
};

export default PrivacyPolicy;
