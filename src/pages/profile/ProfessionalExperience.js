import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { BsCheckCircle } from 'react-icons/bs'; 
import { roles } from '../../utils/constants';
import { Title } from "../Home/CardSection";

const Section = styled.section`
  background-color: #fff;
  padding: 50px 0;
`;

const SubHeading = styled.p`
  text-align: center;
  color: #6c757d;
  font-size: 16px;
  margin-bottom: 40px;
`;

const RoleCard = styled.div`
  display: flex;
  align-items: center;
//   border: 1px dashed #f04e23;
    box-shadow: 0px 0px 4px 0px #00000040;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: #fff;
`;

const RoleText = styled.div`
  margin-left: 15px;
`;

const Company = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const Role = styled.p`
  font-size: 14px;
  color: #6c757d;
  margin: 0;
`;
const ProfessionalExperience = () => {
  return (
    <Section>
      <Container>
        <Title className="text-center pt-4 pt-md-0">Professional Experience and Leadership Roles</Title>
        <SubHeading>
          Mr. Raj has enriched various sectors, with a robust background spanning 27 years, including Design, Chemical Processing, Manufacturing, FMCG, and IT.
        </SubHeading>
        <Row className='justify-content-center'>
          {roles.map((item, index) => (
            <Col md={5} key={index}>
              <RoleCard>
                <BsCheckCircle color="#f04e23" size={24} />
                <RoleText>
                  <Company>{item.company}</Company>
                  <Role>{item.role}</Role>
                </RoleText>
              </RoleCard>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export default ProfessionalExperience;
