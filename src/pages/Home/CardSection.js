// CardSection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import {CardContent } from '../../utils/constants'

const CardSectionWrapper = styled(Container)`
  padding: 50px 0;
`;

const StyledCard = styled.div`
  border: 1px solid #000; 
  border-radius: 10px;
  padding: 20px;
  text-align: left;
  background-color: #fff;

  h3 {
    color: #ff5e3a; /* Orange color */
    font-size: 24px;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding-left: 0;

    li {
      font-weight: bold;
      margin-top: 10px;
    }
  }
`;


const CardSection = () => {
  return (
    <CardSectionWrapper >
      <Row>
        {CardContent.map((card, index) => (
          <Col key={index} md={4}>
            <StyledCard>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <ul>
                {card.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </StyledCard>
          </Col>
        ))}
      </Row>
    </CardSectionWrapper>
  );
};

export default CardSection;
