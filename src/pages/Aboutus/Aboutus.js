import React, { useEffect } from 'react';
import ExpertiseSection from './ExpertiseSection';
import RecordSection from '../Home/RecordSection';
import { Container, Row } from 'react-bootstrap';
import OurPartnerSection from '../Home/OurPartnerSection';
import { ContentColumn, Description, Divider, Heading, Section } from '../IndustryPage';
import { aboutus_data , whyTechCloudERPContent} from '../../utils/constants';
// import TransformingIndustriesSection from '../../components/TransformingIndustriesSection';
import CTA from '../CTA'
import WhyTechCloudERP from './WhyTechCloudERP';
import Services from './Services';
import VisionMissionSection from './VisionMissionSection';
import CoFoundersSection from './CoFoundersSection ';
import AnimatedSection from '../../components/AnimatedUp';
import AnimatedColumn from '../../components/AnimatedLeftRight';


const Aboutus = () => {
  return (
    <>
      <Section>
        <Container>
          <Row>
          <AnimatedColumn direction="left" >
            <ContentColumn md={6}>
              
              {/* Correct the reference to access about_content */}
              <Heading>{aboutus_data.about_content.heading}</Heading>
              <Divider />
              <Description>{aboutus_data.about_content.description}</Description>
              
            </ContentColumn>
            </AnimatedColumn>
          </Row>
        </Container>
      </Section>
      <AnimatedSection id="hero" className="animated-section">
      <VisionMissionSection />
      </AnimatedSection>
      <AnimatedSection id="hero" className="animated-section">     
      <ExpertiseSection />
      </AnimatedSection> 
      <AnimatedSection id="hero" className="animated-section">
      <WhyTechCloudERP content={whyTechCloudERPContent}   title={whyTechCloudERPContent.title}/>
      </AnimatedSection>
      <AnimatedSection id="hero" className="animated-section">
      <RecordSection />
      </AnimatedSection>
      {/* <TransformingIndustriesSection /> */}
      <AnimatedSection id="hero" className="animated-section">
      <Services />
      </AnimatedSection>
      <AnimatedSection id="hero" className="animated-section">
      <CoFoundersSection />
      </AnimatedSection>
      <AnimatedSection id="hero" className="animated-section">
      <CTA />
      </AnimatedSection>
      <OurPartnerSection />
    </>
  );
}

export default Aboutus;
