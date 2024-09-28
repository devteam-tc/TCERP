import React from 'react';
import { Dropdown, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DropdownSubmenu } from 'react-bootstrap-submenu';
import styled from 'styled-components';

const StyledNavLink = styled(Nav.Link)`
  text-decoration: none !important;
  color: black !important;
  &:hover {
    color: #e93906 !important;
  }
`;

const StyledDropdownItem = styled(Dropdown.Item)`
  color: black !important;
  &:focus,
  &:active {
    background-color: transparent !important;
    color: #e93906 !important;
    box-shadow: none !important;
  }
  &:hover {
    color: #e93906 !important;
  }
`;

const NavItem = ({ item, isLargeScreen, handleNavLinkClick, handleDropdownItemClick }) => {
  if (item.type === 'link') {
    return (
      <StyledNavLink onClick={() => handleNavLinkClick(item)}>
        <Link to={item.link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
          {item.title}
        </Link>
      </StyledNavLink>
    );
  } else if (item.type === 'dropdown') {
    return (
      <NavDropdown title={item.title}>
        {item.items.map((subItem, subIndex) => {
          if (subItem.type === 'dropdown') {
            return isLargeScreen ? (
              <DropdownSubmenu key={subIndex} title={subItem.title} alignRight>
                {subItem.items.map((subSubItem, subSubIndex) => (
                  <StyledDropdownItem key={subSubIndex} onClick={handleDropdownItemClick}>
                    <Link to={subSubItem.link}>{subSubItem.title}</Link>
                  </StyledDropdownItem>
                ))}
              </DropdownSubmenu>
            ) : (
              <DropdownSubmenu key={subIndex} title={subItem.title} alignRight>
                {subItem.items.map((subSubItem, subSubIndex) => (
                  <StyledDropdownItem key={subSubIndex} onClick={handleDropdownItemClick}>
                    <Link to={subSubItem.link}>{subSubItem.title}</Link>
                  </StyledDropdownItem>
                ))}
              </DropdownSubmenu>
            );
          } else {
            return (
              <StyledDropdownItem key={subIndex} onClick={handleDropdownItemClick}>
                <Link to={subItem.link}>{subItem.title}</Link>
              </StyledDropdownItem>
            );
          }
        })}
      </NavDropdown>
    );
  }
  return null;
};

export default NavItem;
