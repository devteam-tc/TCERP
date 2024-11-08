import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { BsCalendar, BsPeople, BsPerson, BsBriefcase } from 'react-icons/bs'; // Importing icons
import CalendlyWidget from '../components/Navbar/CalendlyWidget';

// Styled Components
const SectionWrapper = styled(Container)`
  border-radius: 10px;
  background: #FFF;

  /* M3/Elevation Dark/2 */
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);
  margin-top: 15vh;
  margin-bottom: 5vh;

  @media screen and (max-width: 992PX){
    margin-top: 5vh;
    margin-bottom: 5vh;
  }
`;

const TextSection = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding-left: 2vw;
  h1 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 16px;
  }

  p {
    color: #4a4a4a;
    margin-bottom: 16px;
    width: 50%;
  }

  button {
    border-radius: none;
    background: linear-gradient(90deg, #EF5226 0%, #892F16 100%);
    &:hover {
      background-color: #d32f2f;
    }
    border: none;
  }

  @media screen and (max-width: 992PX){
    padding-top: 2vh;
    h1 {
      font-size: 1.5rem;

    }

    p {
      font-size: 1rem;
      width: 100%;
    }
      button{
        font-size: 1rem;
        margin-bottom: 5vh;
      
      }
  }
`;

const StatsSection = styled(Col)`
  background: linear-gradient(180deg, #E13E11 0%, #AA3A1B 100%);
  color: white;
  padding: 60px;
  border-radius: 0 10px 10px 0px;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 16px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    width: 214.198px;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Spacing-ml, 10px);

    li {
      display: flex;
        align-items: center;
        gap: var(--Spacing-ml, 20px);
        align-self: stretch;

      i {
        margin-right: 8px;
      }
    }
  }
`;

// React Component
const PartnershipSection = () => {
  const { openCalendlyWidget } = CalendlyWidget(); // Access openCalendlyWidget from CalendlyWidget component

  const handleDemoClick = () => {
    openCalendlyWidget(); // Call the function to open Calendly
  };

  return (
    <SectionWrapper fluid="md">
      <Row>
        <TextSection md={8}>
          <h1>Progress Through Partnership</h1>
          <p>
            Our expert team is committed to building tailored solutions that meet your specific needs and budget. With Techcloud ERP, you can trust that your construction business is in safe hands.
          </p>
          <Button onClick={handleDemoClick}>Request a demo</Button>
        </TextSection>
        <StatsSection md={4}>
          <h2>A Legacy of Innovation with Techcloud ERP</h2>
          <ul>
            <li><BsCalendar size={20} /> 25+ Years of Experience</li>
            <li><BsPeople size={20} /> 2,000+ Clients</li>
            <li><BsPerson size={20} /> 10,000+ Users</li>
            <li><BsBriefcase size={20} /> 38,000+ Professionals</li>
          </ul>
        </StatsSection>
      </Row>
    </SectionWrapper>
  );
};

export default PartnershipSection;
