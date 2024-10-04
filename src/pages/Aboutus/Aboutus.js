import React from 'react';
import ExpertiseSection from '../../pages/Aboutus/ExpertiseSection';
import RecordSection from '../Home/RecordSection';
import { Container, Row } from 'react-bootstrap';
import OurPartnerSection from '../Home/OurPartnerSection';
import { ContentColumn, Description, Divider, Heading, Section } from '../IndustryPage';
import OurMissionSection from '../Home/OurMissionSection';
import { releavant , aboutus_data , whyTechCloudERPContent} from '../../utils/constants';
// import TransformingIndustriesSection from '../../components/TransformingIndustriesSection';
import CTA from '../CTA'
import WhyTechCloudERP from './WhyTechCloudERP';
import Services from './Services';
const Aboutus = () => {
  return (
    <>
      <Section>
        <Container>
          <Row>
            <ContentColumn md={6}>
              {/* Correct the reference to access about_content */}
              <Heading>{aboutus_data.about_content.heading}</Heading>
              <Divider />
              <Description>{aboutus_data.about_content.description}</Description>
            </ContentColumn>
          </Row>
        </Container>
      </Section>

      {/* Pass the about_content as a prop to OurMissionSection */}
      <OurMissionSection data={releavant.about_content_text} isAboutUs={true} />
      <ExpertiseSection />
      <WhyTechCloudERP content={whyTechCloudERPContent}   title={whyTechCloudERPContent.title}
      />
      <RecordSection />
      {/* <TransformingIndustriesSection /> */}
      <Services />
      <CTA />
      <OurPartnerSection />
    </>
  );
}

export default Aboutus;
