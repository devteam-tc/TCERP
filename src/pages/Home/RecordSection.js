import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { recordcount } from '../../utils/constants';
import { FaBriefcase, FaThumbsUp, FaUsers, FaUserTie } from 'react-icons/fa';

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
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  border-right: 1px solid #e6f6fa;

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
  margin-left: 10px;
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
    border-right: none;
  }
`;

const RecordSection = () => {
  const startCounting = (elementId, end, duration) => {
    const counterElement = document.getElementById(elementId);
    
    const interval = duration / end; // Calculate interval for increments
    let current = 0; // Start from 0

    const intervalId = setInterval(() => {
      current++;
      counterElement.textContent = current + " +";

      if (current >= end) {
        clearInterval(intervalId);
      }
    }, interval);
  };

  useEffect(() => {
    const totalDuration = 10000; // Total duration in milliseconds (10 seconds)
    // Call the function for the four counters with their respective end values
    startCounting('counter1', 25, totalDuration);
    startCounting('counter2', 2000, totalDuration);
    startCounting('counter3', 10000, totalDuration);
    startCounting('counter4', 38000, totalDuration);
  }, []);

  return (
    <StatsSection>
      <Container>
        <StyledRow>
          {recordcount.map((stat, index) => (
            <StyledCol key={index} xs={12} sm={6} md={3}>
              <StatWrapper>
                <IconWrapper>{stat.icon}</IconWrapper> {/* Icon */}
                <div>
                  <StatNumber id={`counter${index + 1}`}>{stat.number}</StatNumber> {/* Number */}
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
