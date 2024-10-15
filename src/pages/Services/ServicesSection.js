import React, { useState, useEffect } from 'react';
import { ContentColumn, Description, Divider, Heading, Section } from '../IndustryPage';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';
import { servicesData } from '../../utils/constants';
import { Title } from '../Home/CardSection';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';

// Styled components
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
  background: #fff7f4;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  color: #333;
  span {
    color: #05a7cc;
    font-weight: 500;
  }
`;

const SectionWrapper = styled.div`
  padding: 50px 0;
  text-align: center;
`;

const SectionSubtitle = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #000;
  margin-bottom: 40px;
`;

const CardWrapper = styled.div`
  border: 1px solid #0b0a0a;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  text-align: left;
  transition: transform 0.3s ease;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 10px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-left: 15px;
`;

const CardText = styled.p`
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.01em;
  color: #393939;
  margin-top: 10px;
`;

const CardImage = styled.img`
  width: 40px;
  height: 40px;
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
  const [service, setService] = useState(null);

  useEffect(() => {
    const selectedService = servicesData[serviceId] || servicesData['digital-marketing'];
    setService(selectedService || null); // Set to null if no service is found
  }, [serviceId]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!service) {
    return <NotFound />;
  }

  const renderFAQs = () => {
    return service.faq.map((item, index) => (
      <FAQItem key={index}>
        <QuestionContainer onClick={() => toggleFAQ(index)}>
          <Question>{item.question}</Question>
          <Icon aria-hidden="true">{activeIndex === index ? <FaMinus /> : <FaPlus />}</Icon>
        </QuestionContainer>
        {activeIndex === index && item.answer && <Answer>{item.answer}</Answer>}
      </FAQItem>
    ));
  };

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
            <Col md={6} className="p-5">
              <Title>{service.title}</Title>
              {service.description.map((paragraph, index) => (
                <Text key={index}>{paragraph}</Text>
              ))}
            </Col>
            <Col md={6} className="text-center text-md-end p-0">
              <Image className="w-75 border-0" src={service.image} alt={service.altText} />
            </Col>
          </Row>
        </Container>
      </DescriptionContainer>
      <SectionWrapper>
        <Container>
          <Title className="text-center pt-4 pt-md-0">{service.mainTitle}</Title>
          <SectionSubtitle>{service.sectionSubtitle}</SectionSubtitle>
          <Row>
            {service.services.map((srv) => (
              <Col md={6} key={srv.id} className="d-flex">
                <CardWrapper>
                  <CardContent>
                    <CardHeader>
                      <CardImage src={srv.image} alt={srv.title} />
                      <CardTitle>{srv.title}</CardTitle>
                    </CardHeader>
                    <CardText>{srv.description}</CardText>
                  </CardContent>
                </CardWrapper>
              </Col>
            ))}
          </Row>
        </Container>
      </SectionWrapper>
      <FAQContainer>
        <Container>
          <Title>FAQ</Title>
          <Subtitle>
            Have any questions? <span>Read popular answers below</span>
          </Subtitle>
          {renderFAQs()}
        </Container>
      </FAQContainer>
    </>
  );
};

export default ServicesSection;
