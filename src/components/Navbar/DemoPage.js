import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ContentColumn, Description, Heading, Section } from '../../pages/IndustryPage';
import { Container, Row, Col } from 'react-bootstrap';

// Styled components
const CalendlyWidgetWrapper = styled.div`
  min-width: 100%;
  height: 700px;
`;

const DemoPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Section>
        <Container>
          <Row className="text-center">
            <Col>
              <Heading>Book A Demo</Heading>
              <Description>
                Scheduling a live, personalized product demonstration allows potential customers to explore key features, ask questions, and see firsthand how the solution can meet their unique needs, helping them make confident, informed purchasing decisions.
              </Description>
            </Col>
          </Row>
        </Container>
      </Section>

      <Container>
        <Row>
          <Col>
            <CalendlyWidgetWrapper
              className="calendly-inline-widget"
              data-url="https://calendly.com/dvignesh-techclouderp/demo"
            ></CalendlyWidgetWrapper>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DemoPage;
