import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Accordion,  Col, Container, Row } from 'react-bootstrap';
import { BodySection, ContentColumn, Description, Divider, Heading, Section } from '../IndustryPage';
import { productData } from '../../utils/constants'; // Import product data from constants.js
import styled from 'styled-components';
import { BsCheckCircle } from 'react-icons/bs'; // Import tick mark icon from react-icons
import { Title } from '../Home/CardSection';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import OurPartnerSection from '../Home/OurPartnerSection';
import CTA from '../CTA';
import { Helmet } from 'react-helmet-async';
import Typewriter from "typewriter-effect";

// Styled Components
const CardContainer = styled.div`
  padding: 30px;
  font-weight: 500;
  background-color: white;
  width: 25vw;
  height: 100%;  /* Ensures all cards have the same height */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: #FFF;
  color: #393939;

  /* M3/Elevation Light/2 */
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-5px); /* Hover effect */
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1); /* Adds shadow on hover */
    background: #FFF;

/* M3/Elevation Light/2 */
box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 992px) {
    width: 100%;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 15px;
`;

const CardList = styled.ul`
  list-style: none;
  padding: 0;
  
`;

const CardItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-size: 14px;
`;

const Icon = styled(BsCheckCircle)`
  color: #FF4500;
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 10px;
`;

// Styled Components
const SectionWrapper = styled.div`
  padding: 2rem;
  // background-color: #fdf2f8;
  background-image: url(${require('../../assets/Products/training.png')});
  background-size: 100% 100%;
  background-position: center;
`;


const StyledTabContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
`;

const StyledTabItem = styled.div`
  font-weight: bold;
  color: ${(props) => (props.isActive ? 'white' : '#ff4500')}; /* Text color based on active state */
  cursor: pointer;
  padding: 1rem;
  background-color: ${(props) => (props.isActive ? '#EF5226' : 'transparent')}; /* Background color based on active state */
  border-radius: 8px;
  margin-bottom: 1rem;

  &:hover {
    background-color: #EF5226;
    color: white;
  }
`;

const StyledAccordionHeader = styled(Accordion.Header)`
  background:none !important; 
  color: #ff6200 !important; 
  font-size: 1.2rem;
  border-radius: 4px;
  box-shadow: none;
  cursor: pointer;
  border: 2px solid #EF5226;
`;

const StyledAccordionItem = styled(Accordion.Item)`
  border: none;
  margin-bottom: 10px;
  border-radius: 8px;
`;

const StyledAccordionBody = styled(Accordion.Body)`
  background-color: transparent; 
  color: #0B0A0A;
  border-top: none;
  padding-left:20px
  font-size: 1rem;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const StyledProductsHeading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #ff6200;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }`

const TabContent = ({ content, image, alt }) => {
  const contentArray = Array.isArray(content) ? content : [];

  return (
    <StyledTabContent>
      <div className="row">
        <div className="col-12 col-lg-6 mb-4">
          {contentArray.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="w-100">
                <p className="fw-semibold">
                  <span className="fw-bold">{item.title}</span> {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center">
          <img
            src={image || '/default-image.png'} // Fallback to a default image
            alt={alt || "Default alt text"}
            className="rounded-md img-fluid"
          />
        </div>
      </div>
    </StyledTabContent>
  );
};

const ProductPage = () => {
  const { productId } = useParams();
  
  const product = productData[productId] || {
    heading: 'Product Not Found',
    description: 'The product you are looking for does not exist.',
    tabsHeadings: {},  // Ensure tabsHeadings and tabData are at least empty objects
    tabData: {}
  };

  
  // Get the first tab key
  const firstTab = Object.keys(product.tabsHeadings)[0];

  // Initialize activeTab with the first tab if none is selected
  const [activeTab, setActiveTab] = useState(firstTab);

  // Ensure a valid tab is always selected
  useEffect(() => {
    if (!activeTab || !product.tabsHeadings[activeTab]) {
      setActiveTab(firstTab); // Automatically select the first tab
    }
  }, [activeTab, product.tabsHeadings, firstTab]);

  // Safely access tab data with default values
  const tabContent = product.tabData[activeTab] || { content: [], image: '/default-image.png', alt: 'Default image description' };

    // Dynamic meta data generation
    const metaTitle = product.heading || "Tech Cloud ERP - Product Details";
    const metaDescription = product.description || "Learn more about our products and solutions.";
    const metaKeywords = product.cards ? product.cards.map(card => card.title).join(", ") : "ERP, Solutions, Tech Cloud";

  return (
    <>
    {/* Dynamic meta tags */}
    <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
    </Helmet>
      <Section>
        <Container>
          <Row>
            <ContentColumn md={6}>
              {/* <Typewriter strings: [
          "Software Developer",
          "FrontEnd Developer",
          "MERN Stack Developer",
          "UI Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}>{product.heading}</Typewriter> */}
      <Heading><Typewriter
      options={{
        strings: product.heading,
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    /></Heading>
              <Divider />
              <Description>{product.description}</Description>
            </ContentColumn>
          </Row>
        </Container>
      </Section>

      <BodySection style={{ background: '#E6F6FA' }}>
        <Container className="my-4">
          <Title className="text-center text-orange-600 mb-5">Our ERP Solutions Overview</Title>
          <Row>
            {product.cards?.map((card, index) => (
              <Col md={6} lg={4} key={index} className="mb-4 d-flex">
                <CardContainer>
                  <CardTitle>{card.title}</CardTitle>
                  <CardText>{card.text}</CardText>
                  <CardList>
                    {card.items.map((item, idx) => (
                      <CardItem key={idx}>
                        <div><Icon /></div>
                        {item}
                      </CardItem>
                    ))}
                  </CardList>
                </CardContainer>
              </Col>
            ))}
          </Row>
        </Container>
      </BodySection>

      <SectionWrapper>
        <Container>
          

          {/* Tabs for Desktop View */}
          <div className='my-3'>
            <div className="d-none d-md-block">
            <TitleContainer>
            <StyledProductsHeading className='m-0' style={{ color: '#000000' }}>
              {product.productTitle}
            </StyledProductsHeading>
            <Divider style={{ backgroundColor: '#EF5226', marginTop: '10px' }} />
          </TitleContainer>
              <Row>
                <Col md={3} className='m-auto'>
                  <div>
                    {Object.keys(product.tabsHeadings).map((key) => (
                      <StyledTabItem 
                        key={key}
                        onClick={() => setActiveTab(key)} 
                        isActive={activeTab === key}
                      >
                        {product.tabsHeadings[key]} {/* Dynamic tab headings */}
                      </StyledTabItem>
                    ))}
                  </div>
                </Col>
                <Col md={9}>
                  <TabContent content={tabContent.content} image={tabContent.image} alt={tabContent.alt} />
                </Col>
              </Row>
            </div>

            {/* Accordion for Mobile View */}
            <div className="d-md-none">
            <TitleContainer>
            <StyledProductsHeading className='m-0' style={{ color: '#000000' }}>
              Tech Cloud Enterprise Resource Planning
            </StyledProductsHeading>
            <Divider style={{ backgroundColor: '#EF5226', marginTop: '10px' }} />
          </TitleContainer>
              <Accordion defaultActiveKey="0">
                {Object.keys(product.tabsHeadings).map((key, idx) => (
                  
                  <StyledAccordionItem eventKey={idx.toString()} key={key}>
                    <StyledAccordionHeader>{product.tabsHeadings[key]}</StyledAccordionHeader>
                    <StyledAccordionBody>
                      <TabContent content={product.tabData[key]?.content || []} image={product.tabData[key]?.image || '/default-image.png'} alt={product.tabData[key]?.alt || 'Default image description'} />
                    </StyledAccordionBody>
                  </StyledAccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Container>
      </SectionWrapper>
      <OurPartnerSection className='py-2' />
      <CTA />
    </>
  );
};
export default ProductPage;
