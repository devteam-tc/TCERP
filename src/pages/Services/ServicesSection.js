import React, { useState } from 'react';
import { ContentColumn, Description, Divider, Heading, Section } from '../IndustryPage';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound'; // Import the NotFound component
import { servicesData } from '.././../utils/constants'; 
import { Title } from '../Home/CardSection';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';
import EssentialServices from './EssentialServices';

const DescriptionContainer = styled.div``;

const Text = styled.p`
  font-size: 1.125rem;
  color: #4a5568;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const FAQContainer = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #FFF7F4;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  color: #333;
  span {
    color: #05A7CC;
  }
`;

const FAQItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Question = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #333;
`;

const Answer = styled.p`
  margin-top: 0.75rem;
  font-size: 1rem;
  color: #4a5568;
`;

const Icon = styled.span`
  color: #e55300;
`;

const ServicesSection = () => {
  const { serviceId } = useParams();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  // Get the data for the current service
  const service = servicesData[serviceId];

  // If the serviceId is not found, render the NotFound page
  if (!service) {
    return <NotFound />;
  }

  return (
    <>
      <Section>
        <Container>
          <Row>
            <ContentColumn md={6}>
              <Heading>{service.title}</Heading>
              <Divider />
              <Description>{service.description[0]}</Description>
            </ContentColumn>
          </Row>
        </Container>
      </Section>
      <DescriptionContainer>
        <Container>
          <Row className="align-content-center mt-md-5" style={{ backgroundColor: '#FFF3F0' }}>
            {/* Text Section */}
            <Col md={6} className="p-5">
              <Title>{service.title}</Title>
              {service.description.map((paragraph, index) => (
                <Text key={index}>{paragraph}</Text>
              ))}
            </Col>

            {/* Image Section */}
            <Col md={6} className="text-center text-md-end p-0">
              <Image
                className="w-75 border-0"
                src={service.image}
                alt={service.altText}
              />
            </Col>
          </Row>
        </Container>
      </DescriptionContainer>
      <EssentialServices/>
      <FAQContainer>
        <Container>
          <Title>FAQ</Title>
          <Subtitle>
            Have any questions? <span>Read popular answers below</span>
          </Subtitle>

          {service.faq.map((item, index) => (
            <FAQItem key={index}>
              <QuestionContainer onClick={() => toggleFAQ(index)}>
                <Question>{item.question}</Question>
                <Icon>{activeIndex === index ? <FaMinus /> : <FaPlus />}</Icon>
              </QuestionContainer>
              {activeIndex === index && item.answer && <Answer>{item.answer}</Answer>}
            </FAQItem>
          ))}
        </Container>
      </FAQContainer>
    </>
  );
};

export default ServicesSection;
