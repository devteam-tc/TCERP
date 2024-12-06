import React from 'react';
import WorldMapWithMarkers from '../Aboutus/WorldMapWithMarkers';
import { Container, Row } from 'react-bootstrap';
import { ContentColumn, Description, Divider, Heading, Section } from '../../pages/IndustryPage';
import { aboutus_data } from '../../utils/constants';
import { Title } from '../Home/CardSection';
import { SubTitle } from '../ScrollFeatureCard';
import CTA from '../CTA'

const OurBranches = () => {
  return (
    <>
   
      <Section>
        <Container>
          <Row>
            <ContentColumn md={6}>
              {/* Access the OurBranches content from aboutus_data */}
              <Heading>{aboutus_data.OurBranches.heading}</Heading>
              <Divider />
              <Description>{aboutus_data.OurBranches.description}</Description>
            </ContentColumn>
          </Row>
        </Container>
      </Section>
      <Container>
      <Title className="text-center pt-5">Our Branches</Title>
        <SubTitle className='w-100 p-3 mx-auto'>At Tech Cloud ERP Software Solutions, we are proud to provide our services across the globe, catering to businesses of all sizes. Our solutions have reached major cities around the world, including extensive coverage across India. We serve key urban centers like Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, and more, ensuring that companies have access to reliable, cutting-edge ERP software regardless of location. </SubTitle>
      </Container>
      <WorldMapWithMarkers />
      <CTA />
    </>
  );
};

export default OurBranches;