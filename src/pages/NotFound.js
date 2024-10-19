// src/pages/NotFound.js

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorImg = styled.img`
    width: 100%;
    
    @media (min-width: 768px) {
        width:30%;
    }`

const NotFound = () => {
  return (
    <>
    <Helmet>
      <title>Page Not Found | Tech Cloud ERP</title>
    </Helmet>
    <div className="text-center">
      <div>
        <ErrorImg src={require('../assets/errorImg.webp')}/>
      </div>
      <Link to="/" className="btn mt-3 mb-2" style={{backgroundColor: '#D94B23', color: 'white'}}>
        Go to Home Page
      </Link>
    </div></>
  );
};

export default NotFound;
