import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { ContentColumn, Description, Divider, Heading, Section } from '../../pages/IndustryPage';
import { aboutus_data } from '../../utils/constants';
import CTA from '../CTA'
import ServiceContentSection from './ServiceContentSection';
import AnimatedColumn from '../../components/AnimatedLeftRight';

const AllServicesSection = () => {
  return (
    <>
   
      <Section>
        <Container>
          <Row>
            <ContentColumn md={6}>
              <AnimatedColumn direction="left">
              {/* Access the allservices content from aboutus_data */}
              <Heading>{aboutus_data.allservices.heading}</Heading>
              <Divider />
              <Description>{aboutus_data.allservices.description}</Description>
              </AnimatedColumn>
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
