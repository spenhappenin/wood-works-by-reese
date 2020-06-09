import React from 'react';

import styled from 'styled-components';

import HeroImg from '../../images/heroimg.png';
import DescriptionSection from './DescriptionSection';
import WorkSection from './WorkSection';

const Home = () => (
  <div>
    <HeroBanner src={HeroImg} />
    <br />
    <br />
    <br />
    <DescriptionSection />
    <br />
    <br />
    <br />
    <WorkSection />
    <br />
    <br />
    <br />
  </div>
);

const HeroBanner = styled.img`
  width: 100%;
`;

export default Home;
