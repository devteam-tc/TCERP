import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { pricingDataContent } from '../../utils/constants'; // Adjust the import path as needed

// Styled components
const PricingSection = styled.section`
//   background-color: #f7f7f7;
//   padding-bottom: 100px;
  position: relative;
  z-index: 1;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 55px;

  .sub-title {
    font-size: 24px;
    color: #ef5226;
    margin-bottom: 15px;
    margin-top: 5px;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

const PricingItem = styled.div`
  background: white;
  border-radius: 7px;
  padding: 30px 40px;
  box-shadow: rgba(173, 216, 230, 0.5) 0px 10px 20px, rgba(173, 216, 230, 0.7) 0px 6px 6px;
  height: 100%;
  transition: transform 0.3s ease-in-out;

//   &:hover {
//     transform: translateY(-10px);
//   }

  @media only screen and (max-width: 375px) {
    padding: 20px;
  }
`;

const TitleHeading = styled.h4`
  font-size: 22px;
  text-align: center;
  margin-bottom: 25px;
  padding-bottom: 20px;
  color: #ef5226;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(0, 102, 255, 0.1);
  letter-spacing: 6px;

  @media only screen and (max-width: 375px) {
    font-size: 20px;
    letter-spacing: 2px;
  }
`;

const PricingList = styled.ul`
  list-style-type: none;
//   padding: 0;

  li {
    margin-bottom: 10px;
    font-size: 16px;
  }
`;

const StyledButton = styled(Button)`
  background-color: #ef5226;
  border: none;
  color: white;
  padding: 10px 20px;
  margin-top: 15px;

  &:hover {
    background-color: #d04420;
  }

  i {
    margin-left: 8px;
  }
`;

const PricingCard = () => {
  return (
    <PricingSection className='mt-3 mb-3'>
      <Container>
        <Title>
          <span className="sub-title">Discover Our Tailored Pricing Sheet</span>
        </Title>
        <Row>
          {pricingDataContent?.modules?.length ? (
            pricingDataContent.modules.map((module, index) => (
              <Col lg={6} key={index} className="mt-3 mb-3">
                <PricingItem>
                  <TitleHeading>{module.title}</TitleHeading>
                  <PricingList>
                    {module.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </PricingList>
                  <StyledButton href="/pricing" className="theme-btn style-three">
                    Choose Package <i className="fas fa-angle-double-right"></i>
                  </StyledButton>
                </PricingItem>
              </Col>
            ))
          ) : (
            <p>No pricing data available at the moment.</p>
          )}
        </Row>
      </Container>
    </PricingSection>
  );
};

export default PricingCard;
