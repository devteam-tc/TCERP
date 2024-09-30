import React from 'react';
import styled from 'styled-components';
import { BsCheckCircle } from 'react-icons/bs';
import { Col } from 'react-bootstrap';

const CardContainer = styled.div`
  padding: 30px;
  font-weight: 500;
  background-color: white;
  width: 25vw;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: #FFF;
  color: #393939;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    background: #FFF;
  }

  @media (max-width: 992px) {
    width: 100%;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 15px;
`;

const CardList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CardItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-size: 14px;
`;

const Icon = styled(BsCheckCircle)`
  color: #FF4500;
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 10px;
`;

const ProductCard = ({ card }) => {
  return (
    <Col md={6} lg={4} className="mb-4 d-flex">
      <CardContainer>
        <CardTitle>{card.title}</CardTitle>
        <CardText>{card.text}</CardText>
        <CardList>
          {card.items.map((item, idx) => (
            <CardItem key={idx}>
              <div><Icon /></div>
              {item}
            </CardItem>
          ))}
        </CardList>
      </CardContainer>
    </Col>
  );
};

export default ProductCard;
