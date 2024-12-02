import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaPinterest, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import styled from 'styled-components';

const SocialIcon = styled.a`
  color: #000;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
    font-size: 13px;
  border: 2px solid #000; // Circle border
  border-radius: 50%; // Makes the border circular
  transition: color 0.3s ease, border-color 0.3s ease;

  &:hover {
    ${({ href }) => {
      if (href.includes('instagram')) return 'color: #E1306C; border-color: #E1306C;';
      if (href.includes('facebook')) return 'color: #1877F2; border-color: #1877F2;';
      if (href.includes('linkedin')) return 'color: #0077B5; border-color: #0077B5;';
      if (href.includes('pinterest')) return 'color: #E60023; border-color: #E60023;';
      if (href.includes('youtube')) return 'color: #FF0000; border-color: #FF0000;';
      if (href.includes('twitter')) return 'color: #1DA1F2; border-color: #1DA1F2;';
      return 'color: #000; border-color: #000;';
    }}
  }
`;

const SocialMediaIcons = () => {
  return (
    <div className="d-flex align-items-center ms-auto mb-4">
      <SocialIcon href="https://www.instagram.com/techclouderp/?hl=en" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </SocialIcon>
      <SocialIcon href="https://www.facebook.com/TechCloudERPSoftwareSolutions" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </SocialIcon>
      <SocialIcon href="https://www.linkedin.com/company/13619340/admin/feed/posts/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </SocialIcon>
      <SocialIcon href="https://in.pinterest.com/techclouderp/" target="_blank" rel="noopener noreferrer">
        <FaPinterest />
      </SocialIcon>
      <SocialIcon href="https://www.youtube.com/channel/UChUCWRHTzZkYEPRR-AauNkA" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </SocialIcon>
      <SocialIcon href="https://twitter.com/TechCloudERP" target="_blank" rel="noopener noreferrer">
        <FaXTwitter />
      </SocialIcon>
    </div>
  );
};

export default SocialMediaIcons;
