import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { IoCall } from 'react-icons/io5';
import styled from 'styled-components';
import { releavant } from '../../utils/constants';

const PhoneDropdownToggle = styled(Dropdown.Toggle)`
  border: none !important;
  background-color: transparent !important;
  color: #05a7cc;
  padding: 8px !important;
`;

const CustomDropdown = styled(Dropdown)`
  @media (max-width: 1200px) {
    display: none;
  }
`;

const PhoneDropdown = () => {
  return (
    <CustomDropdown className="contact-dropdown">
      <PhoneDropdownToggle className="btn cta-02">
        <IoCall size={28} />
      </PhoneDropdownToggle>
      <Dropdown.Menu>
        <Dropdown.Item href="tel:+13127663390">
          <img
            src={releavant.us_flag_img}
            style={{ width: '25px', height: '25px', marginRight: '10px', borderRadius: '50%' }}
            alt="US flag"
          />
          +1 (312) 766-3390
        </Dropdown.Item>
        <Dropdown.Item href="tel:+9198929439603">
          <img
            src={releavant.indian_flag_img}
            style={{ width: '25px', height: '25px', marginRight: '10px', borderRadius: '50%' }}
            alt="Indian flag"
          />
          +91 8929439603
        </Dropdown.Item>
      </Dropdown.Menu>
    </CustomDropdown>
  );
};

export default PhoneDropdown;
