import { faBirthdayCake, faChartLine, faDollarSign, faHandsHelping, faIdBadge, faMoneyBillWave, faTools, faTrophy } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const PerksTitle = styled.h1`
  font-size: 2.5rem;
  color: #00c0ff;
  text-align: center;
  margin-top: 20px;
  span {
    color: #ff6a00;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const Divider = styled.div`
  width: 100px;
  height: 5px;
  background: linear-gradient(to right, #00c0ff, #ff6a00);
  margin: 20px auto;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 40px;
  text-align: Justify;
`;

const PerkCard = styled.div`
  background-color: #fff;
  color: #000;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const PerkTitle = styled.div`
  font-size: 1.2rem;
  font-weight: semibold;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    text-align: start;
  }
`;

const perks = [
    { icon: faTrophy, color: '#f7c948', title: 'Performance Appreciation Rewards' },
    { icon: faIdBadge, color: '#a78bfa', title: 'Employee First Policy' },
    { icon: faMoneyBillWave, color: '#a78bfa', title: 'Leave Encashment' },
    { icon: faChartLine, color: '#38bdf8', title: 'Career Growth Opportunity' },
    { icon: faDollarSign, color: '#f87171', title: 'Competitive Salary Package' },
    { icon: faBirthdayCake, color: '#38bdf8', title: 'Festival & Work Anniversary Celebration' },
    { icon: faTools, color: '#a78bfa', title: 'Access to the Latest Tools' },
    { icon: faHandsHelping, color: '#f7c948', title: 'Employee Assistance Programme' },
  ];
const Perks = () => {
  return (
    <div className='mt-5 mb-5 p-5' style={{ backgroundColor: '#E6F6FA' }}>
      <Container>
      <PerksTitle>Perks Of Working With <span>Tech Cloud ERP</span></PerksTitle>
      <Divider />
      <Subtitle>At Tech Cloud ERP, we prioritize our employees' beliefs and respect their individual decisions. Our platform encourages showcasing individual skills, fostering creativity and innovation. We believe in the unique potential of each team member to contribute to our collective success.</Subtitle>
      <Row className="justify-content-center">
        {perks.map((perk, index) => (
          <Col key={index} md={6}>
            <PerkCard>
              <FontAwesomeIcon  icon={perk.icon} style={{ color: perk.color, fontSize: '2rem', margin: '10px', width: '50px' }} />
              <PerkTitle >{perk.title}</PerkTitle>
            </PerkCard>
          </Col>
        ))}
      </Row>
      </Container>
    </div>
  )
}

export default Perks