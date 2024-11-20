import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { ContentColumn, Description, Divider, Heading, Section } from '../../pages/IndustryPage';
import { aboutus_data } from '../../utils/constants';
import CTA from '../CTA'
import ServiceContentSection from './ServiceContentSection';

const AllServicesSection = () => {
  return (
    <>
   
      <Section>
        <Container>
          <Row>
            <ContentColumn md={6}>
              {/* Access the allservices content from aboutus_data */}
              <Heading>{aboutus_data.allservices.heading}</Heading>
              <Divider />
              <Description>{aboutus_data.allservices.description}</Description>
            </ContentColumn>
          </Row>
        </Container>
      </Section>
<ServiceContentSection/>
      <CTA />
    </>
  );
};

export default AllServicesSection;
