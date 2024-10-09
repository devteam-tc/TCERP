import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { ContentColumn, Description, Divider, Heading, Section } from '../IndustryPage';
import { aboutus_data } from '../../utils/constants';
import PricingCard from './PricingCard';
import PricingTable from './PricingTable';

const PricingPage = () => {
    // Destructure heading and description from ContactUs_content
    const { heading, description } = aboutus_data.pricingcontent;

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
        <PricingCard/>
        <PricingTable />
        </>
    );
};

export default PricingPage;
