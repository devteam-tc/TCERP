import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { cardData } from '../../utils/constants';

export const CardContainer = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  padding: 45px 30px;
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.09);
  margin: 10px;
  background-color: #fff;
  text-align: left;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #14c8f1; 
    box-shadow: 0 4px 28px 0 rgba(0, 0, 0, 0.15);

    h3 {
      color: #fff; /* Title color on hover */
    }

    p {
      color: #f0f0f0; /* Paragraph color on hover */
    }
    .icon {
      color: #fff; /* Icon color on hover */
    }
      li{
        color: #fff; /* Icon color on hover */
      }
  }
`;

export const CardTitle = styled.h3`
  color: #ff4500;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  text-align: left;
`;

export const CardText = styled.p`
  color: #333333;
  font-size: 16px;
  line-height: 1.5;
`;

export const HighlightedText = styled.ul`
  font-weight: 500;
  color: #333;
  font-size: 16px;
  list-style-type: none;
  margin-top: 20px;
  line-height: 1.5;
  padding-left: 4px;
`;

export const HighlightItem = styled.li`
  margin-bottom: 10px;
`;

export const StyledButton = styled(Button)`
  background-color: #ff4500;
  border: none;
  margin: 20px auto;
  display: block;
  &:hover{
    background: #E13E11 !important;
  }
`;

const IconWrapper = styled.div`
  font-size: 40px;
  color: #f26633;
  text-align: left;
  transition: color 0.3s ease;
`;

export const Title = styled.h1`
  font-size: 40px;
  color: #ef5226;
  line-height: 60px;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    font-size: 32px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

const CardSection = () => {
  const [visiblePlans, setVisiblePlans] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCards = () => {
    setVisiblePlans(isExpanded ? 3 : cardData.normal.length + cardData['Show More'].length);
    setIsExpanded(!isExpanded);
  };

  const moreCardsToShow = [...cardData.normal, ...cardData['Show More']].slice(0, visiblePlans);

  return (
    <div className="my-md-5" style={{ backgroundColor: '#F5FDFF', padding: '60px 0px' }}>
      <Title className="text-center pt-4 pt-md-0">Why Tech Cloud ERP ?</Title>
      <Container>
        <Row>
          {moreCardsToShow.map((card, index) => (
            <Col md={4} key={index} className="mb-3">
              <CardContainer>
                <IconWrapper className="icon">
                  <card.icon />
                </IconWrapper>
                <CardTitle>{card.title}</CardTitle>
                <CardText>{card.text}</CardText>
                <HighlightedText>
                  {card.highlights.map((highlight, i) => (
                    <HighlightItem key={i}>{highlight}</HighlightItem>
                  ))}
                </HighlightedText>
              </CardContainer>
            </Col>
          ))}
        </Row>
        <StyledButton onClick={toggleCards} className="fw-bold">
          {isExpanded ? 'Show less' : 'Show more'}
        </StyledButton>
      </Container>
    </div>
  );
};

export default CardSection;
