import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { recordcount } from '../../utils/constants';
import AnimatedSection from '../../components/AnimatedUp';

// Styled Components
const StatsSection = styled.section`
  background: #05A7CC;
  padding: 40px 0;
  color: #fff;
  text-align: center;
  box-shadow: 0px 0px 30px 20px rgba(0, 0, 0, 0.25) inset;

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
    font-size: 1.5rem;
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
    font-size: 0.5rem;
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
    font-size: 2rem;
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
    const step = end / (duration / 50); // Increment step based on the total duration and interval (50ms)
    let current = 0;

    const intervalId = setInterval(() => {
      current += step;
      if (current >= end) {
        current = end; // Ensure we reach exactly the target value
        clearInterval(intervalId);
      }
      counterElement.textContent = Math.floor(current) + " +";
    }, 50); // Fixed interval of 50ms
  };

  useEffect(() => {
    const totalDuration = 1500;

    // Start counting for each counter with respective end values
    startCounting('counter1', 25, totalDuration);
    startCounting('counter2', 2000, totalDuration);
    startCounting('counter3', 10000, totalDuration);
    startCounting('counter4', 38000, totalDuration);
  }, []);

  return (
    <AnimatedSection id="hero" className="animated-section">
    <StatsSection>
      <Container>
        <StyledRow>
          {recordcount.map((stat, index) => (
            <StyledCol key={index} xs={12} sm={6} md={3}>
              <StatWrapper>
                <IconWrapper>{stat.icon}</IconWrapper>
                <div>
                  <StatNumber id={`counter${index + 1}`}>{stat.number}</StatNumber>
                  <StatText>{stat.text}</StatText>
                </div>
              </StatWrapper>
            </StyledCol>
          ))}
        </StyledRow>
      </Container>
    </StatsSection>
    </AnimatedSection>
  );
};

export default RecordSection;
