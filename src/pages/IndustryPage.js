import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CTA from './CTA';
import OurPartnerSection from './Home/OurPartnerSection';


export const Section = styled.section`
  opacity: var(--sds-size-stroke-border);
  background: linear-gradient(90deg, #C62B00 1%, #AA3A1B 42.97%, #7C2209 100%);
  padding: 90px 0;
  color: white;
  text-align: left;
  
  @media (max-width: 1200px) {
    height: 450px; 
  }

  @media (max-width: 992px) {
    padding: 30px 0;
    height: 400px; 
  }

  @media (max-width: 768px) {
    height: 350px; 
  }

  @media (max-width: 576px) {
    height: auto;
  }
`;

export const Heading = styled.h2`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 992px) {
    font-size: 28px;
    // margin-bottom: 15px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 30px;

  @media (max-width: 992px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;

  @media (max-width: 992px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding-top: 1vh;
  }
`

export const Divider = styled.div`
  width: 50px;
  height: 3px;
  background-color: #00e8ff;

  @media (max-width: 992px) {
    margin-top: 2px;
  }
`;

export const ContentColumn = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--Spacing-ml, 15px); 

  @media (max-width: 992px) {
    width: 100%; 
  }
`;

export const BodySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  overflow:hidden;
  gap: var(--Spacing-ml, 15px);

  @media (max-width: 992px) {
    width: 100%; 
  }
`

const IndustryTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  text-align: left;
  color: #EF5226;

  @media (max-width: 992px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`

const IndustryText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 30px;
  text-align : justify;
  @media (max-width: 992px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`

const SubTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;

  @media (max-width: 992px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`

const SimilarIndustriesList = styled.ul`
  list-style-type: none;
  margin-top: 15px;
  padding: 0;
`;

const SimilarIndustryItem = styled.li`
  margin-bottom: 15px;
  border: 1px solid #EF5226;
  border-radius: 12px;
  padding: 2%;
  display: flex;
  justify-content: space-between;
  
  &:hover {
    background-color: #EF5226;
    
    a, svg {
      color: #fff; /* Text and icon color on hover */
    }
  }

  a {
    text-decoration: none;
    color: #0B0A0A;
    flex-grow: 1; /* Ensures the link takes up remaining space */
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 600;

    &:hover {
      color: #fff; /* Text color on hover */
    }
  }

  svg {
    margin-left: 10px;
    color: #EF5226; /* Icon color */
  }
`;

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--Spacing-ml, 15px);
  

  @media (max-width: 992px) {
    width: 100%;
  }`

const IndustryPage = ({ data }) => {
  const { heading, subheading , description, top_description, bottom_description, similar_industries } = data;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: adds a smooth scrolling effect
    });
  };

  useEffect(() => {
    // Dynamically load the Elfsight script
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', 'true');
    script.defer = true;
    document.body.appendChild(script);
    // Cleanup script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
    <BodySection>
      <Container>
        <Row>
          <Col md={8}>
            <div className='border border-1 rounded-3 bg-dark-50 p-3 my-3'>
            <Image src={data.top_img} alt={data.alt_text1}/>
            <IndustryTitle className='pt-2 mt-2'>{heading}</IndustryTitle>
            <IndustryText>{top_description}</IndustryText>
            </div>
            <div className='border border-1 rounded-3 bg-dark-50 p-3'>
            <Image src={data.bottom_img} alt={data.alt_text1}/>
            <IndustryTitle className='pt-2 mt-2'>{subheading}</IndustryTitle>
            <IndustryText>{bottom_description}</IndustryText>
            </div>
          </Col>
          <Col md={4}>
          <div className='border border-1 rounded-3 bg-dark-50 p-3 my-3 shadow-sm' >
          <SubTitle>Similar Industries</SubTitle>
          <SimilarIndustriesList >
                  {similar_industries && similar_industries.length > 0 ? (
                    similar_industries.map((industry, index) => (
                      <SimilarIndustryItem key={index}>
                        <Link to={industry.link} onClick={scrollToTop} >
                          {industry.title}
                          <FaExternalLinkAlt />
                        </Link>
                      </SimilarIndustryItem>
                    ))
                  ) : (
                    <p>No similar industries available.</p>
                  )}
          </SimilarIndustriesList>
          </div>
          <div className='border border-1 rounded-3 bg-dark-50 p-3 my-3 shadow-sm'>
            <ContactForm><div className="elfsight-app-781289d2-3d2a-4085-8436-a5eb3b9bf3c1" data-elfsight-app-lazy></div></ContactForm>
          </div>
          </Col>
        </Row>
        <CTA/>
      </Container>
      <div className='py-3'>
        <OurPartnerSection/>
      </div>
    </BodySection>
    </>
  );
};

export default IndustryPage;