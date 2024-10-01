import React, { useState, useEffect } from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import TabContent from './TabContent';

const StyledTabItem = styled.div`
  font-weight: bold;
  color: ${(props) => (props.isActive ? 'white' : '#ff4500')};
  cursor: pointer;
  padding: 1rem;
  background-color: ${(props) => (props.isActive ? '#EF5226' : 'transparent')};
  border-radius: 8px;
  margin-bottom: 1rem;

  &:hover {
    background-color: #EF5226;
    color: white;
  }
`;

const StyledAccordionHeader = styled(Accordion.Header)`
  background:none !important; 
  color: #ff6200 !important;
  font-size: 1.2rem;
  border-radius: 4px;
  border: 2px solid #EF5226;
`;

const StyledAccordionItem = styled(Accordion.Item)`
  border: none;
  margin-bottom: 10px;
  border-radius: 8px;
`;

const StyledAccordionBody = styled(Accordion.Body)`
  background-color: transparent; 
  color: #0B0A0A;
  padding-left: 20px;
`;

const TabNavigation = ({ tabsHeadings, tabData, activeTab, setActiveTab }) => {
  const firstTab = Object.keys(tabsHeadings)[0];

  useEffect(() => {
    if (!activeTab || !tabsHeadings[activeTab]) {
      setActiveTab(firstTab);
    }
  }, [activeTab, tabsHeadings, firstTab]);

  return (
    <>
      <div className="d-none d-md-block">
        <Row>
          <Col md={3} className='m-auto'>
            {Object.keys(tabsHeadings).map((key) => (
              <StyledTabItem
                key={key}
                onClick={() => setActiveTab(key)}
                isActive={activeTab === key}
              >
                {tabsHeadings[key]}
              </StyledTabItem>
            ))}
          </Col>
          <Col md={9}>
            <TabContent content={tabData[activeTab]?.content || []} image={tabData[activeTab]?.image} alt={tabData[activeTab]?.alt} />
          </Col>
        </Row>
      </div>

      <div className="d-md-none">
        <Accordion defaultActiveKey="0">
          {Object.keys(tabsHeadings).map((key, idx) => (
            <StyledAccordionItem eventKey={idx.toString()} key={key}>
              <StyledAccordionHeader>{tabsHeadings[key]}</StyledAccordionHeader>
              <StyledAccordionBody>
                <TabContent content={tabData[key]?.content || []} image={tabData[key]?.image} alt={tabData[key]?.alt} />
              </StyledAccordionBody>
            </StyledAccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default TabNavigation;
