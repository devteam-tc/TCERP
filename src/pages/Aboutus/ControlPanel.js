// src/components/ControlPanel.js
import React from 'react';
import styled from 'styled-components';
import { Form, Row, Col, Accordion } from 'react-bootstrap';

const PanelWrapper = styled.div`
  width: 350px;
  padding: 20px;
  background-color: #f8f9fa;
  border-right: 1px solid #ccc;
  overflow-y: auto;
`;

const ControlPanel = ({ latitude, longitude, onLatitudeChange, onLongitudeChange }) => {
  return (
    <PanelWrapper>
      <Form.Group controlId="search">
        <Form.Control type="text" placeholder="Enter place name to search" />
      </Form.Group>
      
      <h5 className="mt-3">Input Coordinates</h5>
      
      <Row>
        <Col>
          <Form.Label>Latitude:</Form.Label>
          <Form.Control
            type="number"
            value={latitude}
            onChange={(e) => onLatitudeChange(parseFloat(e.target.value))}
          />
        </Col>
      </Row>
      
      <Row className="mt-2">
        <Col>
          <Form.Label>Longitude:</Form.Label>
          <Form.Control
            type="number"
            value={longitude}
            onChange={(e) => onLongitudeChange(parseFloat(e.target.value))}
          />
        </Col>
      </Row>
      
      <Accordion defaultActiveKey="0" className="mt-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Place Details</Accordion.Header>
          <Accordion.Body>Details about the place...</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Country Details</Accordion.Header>
          <Accordion.Body>Details about the country...</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Timezone Details</Accordion.Header>
          <Accordion.Body>Timezone information...</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </PanelWrapper>
  );
};

export default ControlPanel;
