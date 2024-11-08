import React from 'react';
import styled from 'styled-components';
import { BsCheckCircle } from 'react-icons/bs';

const CardContainer = styled.div`
  padding: 30px;
  font-weight: 500;
  width: 100%;
  height: 100%; 
  // transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: #FFF;
  color: #393939;
  border-radius: 5px;

  &:hover {
    // transform: translateY(-5px);
    box-shadow: rgba(173, 216, 230, 0.5) 0px 10px 20px, rgba(173, 216, 230, 0.7) 0px 6px 6px;
    background: #FFF;
    box-shadow: rgba(173, 216, 230, 0.5) 0px 10px 20px, rgba(173, 216, 230, 0.7) 0px 6px 6px;
        cursor:pointer;

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
  margin-right: 10px;
`;

const ProductCard = ({ title, text, items }) => (
  <CardContainer>
    <CardTitle>{title}</CardTitle>
    <CardText>{text}</CardText>
    <CardList>
      {items.map((item, idx) => (
        <CardItem key={idx}>
          <div><Icon /></div>
          {item}
        </CardItem>
      ))}
    </CardList>
  </CardContainer>
);

export default ProductCard;
