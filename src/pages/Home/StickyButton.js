import React from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"; 

const moveUpDown = keyframes`
  0% {
    top: 300px;
  }
  100% {
    top: 320px;
  }
`;

const StickyButtonWrapper = styled.div`
  position: fixed;
  right: ${(props) => (props.left ? "auto" : "-188px")};
  left: ${(props) => (props.left ? "45px" : "auto")};
  top: 300px;
  width: 200px;
  height: 25px;
  z-index: 99999;
  transform: rotate(90deg);
  transform-origin: 0 0;
  animation: ${moveUpDown} 2s infinite alternate;

  @media only screen and (max-width: 980px) {
    top: 300px !important;
    transition: top 0.3s ease-in-out;
    animation: none; /* Disable animation on smaller screens */
  }
`;

const StyledButton = styled(Button)`
  border-radius: 15px;
  border: 1px solid #ef5226;
  font-size: 16px;
  background: #ef5226;
  padding: 5px 15px;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background: #05a7cc;
    border: 1px solid #05a7cc;
  }
`;

const StickyButton = () => (
  <>
    <StickyButtonWrapper>
      <Link to="/path/to/brochure" aria-label="Download Brochure">
        <StyledButton>
          Download Brochure
        </StyledButton>
      </Link>
    </StickyButtonWrapper>

    <StickyButtonWrapper left>
      <Link to="/product-comparison" aria-label="Product Comparison">
        <StyledButton>
          Product Comparison
        </StyledButton>
      </Link>
    </StickyButtonWrapper>
  </>
);

export default StickyButton;
