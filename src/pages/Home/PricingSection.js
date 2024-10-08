import React from "react";
import styled from "styled-components";
import { pricingPlans } from "../../utils/constants";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { GoCheckCircleFill } from "react-icons/go";
import { Title } from "./CardSection";

// Styled components
const Section = styled.section`
  padding: 40px 0;
  background-color: #f9f9f9;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  position: relative; /* Added to position the badge */
  padding: 20px;
  border: 1px solid #b2e4ef;
  border-radius: 10px;
  cursor: pointer;
  max-width: 340px;
  box-shadow: rgba(173, 216, 230, 0.5) 0px 10px 20px,
    rgba(173, 216, 230, 0.7) 0px 6px 6px;

  @media (max-width: 992px) {
    margin: 0 10px;
  }
`;

const Badge = styled.div`
  position: absolute;
  top: -10px;
    right: 20px;
  background-color: #ff5722;
  color: #fff;
  padding: 5px 10px;
  border-radius: 50px;
  font-size: 12px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px;
`;

const Price = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 28.8px;
  text-align: left;
  margin-bottom: 10px;

  span {
    font-size: 16px;
  }
`;

const PlanTitle = styled.h2`
  background-color: ${(props) => props.tagColor || "#ff5722"};
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 10px;

  @media (max-width: 992px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  border-bottom: 1px solid #b2e4ef;
  padding-bottom: 20px;

  @media (max-width: 992px) {
    font-size: 14px;
  }
`;

const CoverageList = styled.ul`
  text-align: left;
  margin-bottom: 20px;
  padding-left: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22.4px;
  letter-spacing: -0.03em;
`;

const CoverageItem = styled.li`
  font-size: 16px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  @media (max-width: 992px) {
    font-size: 12px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #ef5226;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  // margin-top: 10px;
  text-align: center;

  @media (max-width: 992px) {
    width: 100%;
    font-size: 14px;
  }
`;

const PopularButton = styled(Button)`
  background-color: #fff;
    color: #000;
    // padding: 4px 10px;
    border-radius: 5px;
    width:35% !important;
    // font-size:18px;
    padding: 5px 10px;
    font-weight: 500;
    display: inline-block;
    margin-bottom: 10px;
`;

const PricingSection = () => (
  <Section>
    <Title className="text-center pt-4 pt-md-0">Tech Cloud ERP Pricing</Title>
    <CardContainer>
      {pricingPlans.map((pkg, index) => (
        <Card
          key={index}
          style={{ background: pkg.background, color: pkg.color }}
        >
          {/* Conditionally render badge for the second card only */}
          {index === 1 && <Badge>Popular</Badge>}
          
          {/* Conditionally render the PlanTitle only if index is not 1 */}
          {index !== 1 && <PlanTitle>{pkg.title || ""}</PlanTitle>}

          {/* Conditionally render "Enterprise" button only on the second card */}
          {index === 1 && (
            <PopularButton>Enterprise</PopularButton>
          )}
          {pkg.note && <Description>{pkg.note}</Description>}

          <Price>
            <FaIndianRupeeSign style={{ marginRight: "0px" }} />
            {pkg.price} <span></span>
          </Price>
          <Description>{pkg.description}</Description>
          <CoverageList>
            {pkg.coverages.map((coverage, i) => (
              <CoverageItem key={i}>
                <GoCheckCircleFill style={{ marginRight: "8px" }} />
                {coverage}
              </CoverageItem>
            ))}
          </CoverageList>
          <Button>Buy Now</Button>
          <p className="text-center pt-3">{pkg.creditCardRequired}</p>
        </Card>
      ))}
    </CardContainer>
  </Section>
);

export default PricingSection;
