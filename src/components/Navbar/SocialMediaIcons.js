import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaPinterest, FaYoutube, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

const SocialIcon = styled.a`
  color: #000;
  margin: 0 8px;
  font-size: 22px;
  &:hover {
    ${({ href }) => {
      if (href.includes('instagram')) return 'color: #E1306C;';
      if (href.includes('facebook')) return 'color: #1877F2;';
      if (href.includes('linkedin')) return 'color: #0077B5;';
      if (href.includes('pinterest')) return 'color: #E60023;';
      if (href.includes('youtube')) return 'color: #FF0000;';
      if (href.includes('twitter')) return 'color: #1DA1F2;';
      return 'color: #000;';
    }}
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

const SocialMediaIcons = () => {
  return (
    <div className="d-flex align-items-center ms-auto">
      <SocialIcon href="https://www.instagram.com" target="_blank">
        <FaInstagram />
      </SocialIcon>
      <SocialIcon href="https://www.facebook.com" target="_blank">
        <FaFacebookF />
      </SocialIcon>
      <SocialIcon href="https://www.linkedin.com" target="_blank">
        <FaLinkedinIn />
      </SocialIcon>
      <SocialIcon href="https://www.pinterest.com" target="_blank">
        <FaPinterest />
      </SocialIcon>
      <SocialIcon href="https://www.youtube.com" target="_blank">
        <FaYoutube />
      </SocialIcon>
      <SocialIcon href="https://www.twitter.com" target="_blank">
        <FaTwitter />
      </SocialIcon>
    </div>
  );
};

export default SocialMediaIcons;
