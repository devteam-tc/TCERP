import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CustomDropdown = styled(Dropdown)`
  position: relative;
  display: inline-block;
  cursor: pointer;

  .dropdown-toggle::after {
    display: none; /* Hide default dropdown icon */
  }

  .dropdown-toggle {
    padding: 8px;
    border-radius: 4px;
    transition: color 0.3s;

    &:hover {
      color: #e93906;
    }
  }

  .dropdown-menu {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 0;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
  }

  ${props => props.direction === 'left' && `
    left: auto;
    right: 0;
  `}
  ${props => props.direction === 'right' && `
    left: 100%;
  `}
  
  &:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
  }
`;

const DropdownIcon = styled.div`
  display: inline-block;
  margin-left: 5px;
`;

const DropdownItem = styled(Dropdown.Item)`
  padding: 8px 16px;
  &:hover {
    background-color: #f8f9fa;
  }
`;



const CustomNavDropdown = ({ title, children, id }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <CustomDropdown 
      show={showDropdown} 
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <Dropdown.Toggle as="div">
        {title}
        <DropdownIcon>
          {showDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </DropdownIcon>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {children}
      </Dropdown.Menu>
    </CustomDropdown>
  );
};

CustomNavDropdown.Item = DropdownItem; // Allows usage of CustomNavDropdown.Item

export default CustomNavDropdown;
