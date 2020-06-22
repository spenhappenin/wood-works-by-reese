import React from 'react';

import styled from 'styled-components';

import { Container, } from '../../styles/shared';

const Footer = () => (
  <Container style={{ height: '300px', }}>
    <BigText>Contact</BigText>
    <p>Email: test@test.com</p>
    <p>Phone: (801) 123-4567</p>
  </Container>
);

const BigText = styled.h1`
  font-family: 'PT Serif Caption', serif;
  font-size: 2.0rem;
  font-weight: normal;
  color: #585858;
`;

export default Footer;
