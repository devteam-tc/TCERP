import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { ContentColumn, Description, Divider, Heading, Section } from '../IndustryPage';
import { ContactUs_content } from '../../utils/constants';
import ContactForm from './Form';
import MapSection from './MapSection';

const ContactUs = () => {
    // Destructure heading and description from ContactUs_content
    const { heading, description } = ContactUs_content;

    return (
        <><Section>
            <Container>
                <Row>
                    <ContentColumn md={6}>
                        <Heading>{heading}</Heading>
                        <Divider />
                        <Description>{description}</Description>
                    </ContentColumn>
                </Row>
            </Container>
        </Section><ContactForm />
        <MapSection />
        
        </>
    );
};

export default ContactUs;
