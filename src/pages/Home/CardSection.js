import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { cardData } from '../../utils/constants';

export const CardContainer = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  padding: 20px;
  background-color: #fdf6f4;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  text-align: left;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  color: #ff4500;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  text-align: left;
  margin-bottom: 20px;
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
  list-style-type:none;
  margin-top: 20px;
  line-height: 1.5;
  padding-left: 20px; /* Indent the list */
`;

export const HighlightItem = styled.li`
  margin-bottom: 10px;
`;

const StyledButton = styled(Button)`
  background-color: #ff4500;
  border: none;
  margin: 20px auto;
  display: block;
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
    <div className="my-md-5">
      <Title className="text-center pt-4 pt-md-0">Why Tech Cloud ERP ?</Title>
      <Container>
        <Row>
          {moreCardsToShow.map((card, index) => (
            <Col md={4} key={index} className="mb-3">
              <CardContainer>
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
