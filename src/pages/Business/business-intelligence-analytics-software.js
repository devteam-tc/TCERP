import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { ContentColumn, Description, Divider, Heading, Section } from '../IndustryPage';
import { businessData , whyTechCloudERPContent } from '../../utils/constants'; 
import WhyTechCloudERP from '../Aboutus/WhyTechCloudERP';
import CTA from '../CTA'
import TransformingIndustriesSection from '../../components/TransformingIndustriesSection';
import ReportingSection from './ReportingSection';
import OurPartnerSection from '../Home/OurPartnerSection';
import BusinessSlider from './BusinessSlider';
const BusinessIntelligence = () => {
    const { heading, description } = businessData[0] || { heading: '', description: '' }; 
    const businessIntelligenceContent = whyTechCloudERPContent.BusinessIntelligenceContent; 

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

            {/* Pass the businessIntelligenceContent to WhyTechCloudERP */}
            <WhyTechCloudERP 
                content={businessIntelligenceContent}  title={whyTechCloudERPContent.BusinessIntelligenceContent.title}
            />     
            <BusinessSlider />
            <ReportingSection />
            <TransformingIndustriesSection />
            <CTA /> 
            <OurPartnerSection />  
        </>
    );
};

export default BusinessIntelligence;
