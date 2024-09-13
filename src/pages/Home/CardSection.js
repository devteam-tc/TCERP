import React from 'react';
import styled from 'styled-components';
import { Row, Col, Container } from 'react-bootstrap';
export const CardContainer = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  padding: 20px;
  background-color: #fdf6f4;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  text-align: left;
  height: 100%;
`;

export const CardTitle = styled.h3`
  color: #ff4500; /* Orange color */
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const CardText = styled.p`
  color: #333333;
  font-size: 16px;
  line-height: 1.5;
`;

export const HighlightedText = styled.p`
  font-weight: bold;
  color: #333;
  font-size: 16px;
  margin-top: 20px;
  line-height: 1.5;
`;
const CardSection = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <CardContainer>
            <CardTitle>Solutions For All</CardTitle>
            <CardText>
              Whether you have 2 or 2000 employees, Tech Cloud ERP has a comprehensive portfolio leading cloud-based ERP software solutions and tools to fit your needs. We also provide dedicated support teams that are at your disposal 24/7.
            </CardText>
            <HighlightedText>
              Integrated CRM and ERP System <br />
              E-Commerce Platform <br />
              Workflow Automation
            </HighlightedText>
          </CardContainer>
        </Col>

        <Col md={4}>
          <CardContainer>
            <CardTitle>Flexibility</CardTitle>
            <CardText>
              Tech Cloud ERP is dedicated to creating easy-to-use, adaptable cloud ERP software applications. Whether you want customized ERP software processes, use the public or private cloud or pay only for what you need.
            </CardText>
            <HighlightedText>
              Modular Architecture <br />
              API-Based Integration <br />
              Continuous Improvement
            </HighlightedText>
          </CardContainer>
        </Col>

        <Col md={4}>
          <CardContainer>
            <CardTitle>Security</CardTitle>
            <CardText>
              Tech Cloud ERP platform is built on the most advanced infrastructures in the world. We have teams of experts dedicated to protecting your data, warding off hackers and staying ahead of threats to keep your business and its data safe.
            </CardText>
            <HighlightedText>
              Risk Assessment <br />
              Data Breach <br />
              Encryption
            </HighlightedText>
          </CardContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default CardSection;