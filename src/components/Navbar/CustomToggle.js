import React from 'react';
import { Navbar } from 'react-bootstrap';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';

const NavbarToggle = styled(Navbar.Toggle)`
  border: none !important;
  &:focus {
    box-shadow: none !important;
  }
`;

const CustomToggle = ({ expanded, setExpanded }) => {
  return (
    <NavbarToggle aria-controls="navbarSupportedContent" onClick={() => setExpanded(!expanded)}>
      {expanded ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
    </NavbarToggle>
  );
};

export default CustomToggle;
