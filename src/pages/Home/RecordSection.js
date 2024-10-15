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
  align-items: center;  /* Align icon, number, and text in a row */
  justify-content: center;
  padding: 0 15px;
  border-right: 1px solid #e6f6fa; /* Add border to the right */
  
  // &:last-child {
  //   border-right: none; 
  // }

  @media (max-width: 576px) {
    border: none !important;
  }
`;

const StatNumber = styled.h2`
  font-weight: 600;
  margin-left: 10px;
  text-align: left;
  white-space: nowrap;

  @media (max-width: 576px) {
    font-size: 1.8rem;
  }
`;

const StatText = styled.p`
  font-size: 1rem;
  letter-spacing: 1px;
  text-align: left;
  text-transform: uppercase;
  margin-left: 10px; /* Space between number and text */
  white-space: nowrap;

  @media (max-width: 576px) {
    font-size: 0.7rem;
  }
`;

const IconWrapper = styled.div`
    display: flex;
    font-size: 4rem;
    margin-top: -1rem;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    @media (max-width: 992px) {
    font-size: 3rem;
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

  &:nth-child(4n) ${StatWrapper} {
    border-right: none; /* Remove border on the last column */
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
                <IconWrapper>{stat.icon}</IconWrapper> {/* Icon */}
                <div>
                  <StatNumber>{stat.number}</StatNumber> {/* Number */}
                  <StatText>{stat.text}</StatText> {/* Text */}
                </div>
              </StatWrapper>
            </StyledCol>
          ))}
        </StyledRow>
      </Container>
    </StatsSection>
  );
};

export default RecordSection;
