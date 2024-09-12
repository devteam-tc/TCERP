import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { recordcount } from '../../utils/constants';

// Styled Components
const StatsSection = styled.section`
background: #05A7CC;
  padding: 40px 0;
  color: #fff;
  text-align: center;
  
  @media (max-width: 576px) {
    padding: 20px 0;
  }
`;

const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
`;

const StatNumber = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 5px;
  white-space: nowrap;

  @media (max-width: 576px) {
    font-size: 1.8rem;
  }
`;

const StatText = styled.p`
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 0;
  white-space: nowrap;

  @media (max-width: 576px) {
    font-size: 0.7rem;
  }
`;

const StyledRow = styled(Row)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledCol = styled(Col)`
  flex: 0 0 50%;
  max-width: 50%;
  padding: 15px 15px 0 0;

  @media (min-width: 576px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (min-width: 992px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;

const RecordSection = () => {
  return (
    <StatsSection>
      <Container>
        <StyledRow>
          {recordcount.map((stat, index) => (
            <StyledCol key={index} xs={12} sm={6} md={3}>
              <StatWrapper>
                <StatNumber>{stat.number}</StatNumber>
                <StatText>{stat.text}</StatText>
              </StatWrapper>
            </StyledCol>
          ))}
        </StyledRow>
      </Container>
    </StatsSection>
  );
};

export default RecordSection;