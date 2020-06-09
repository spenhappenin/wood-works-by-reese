import React from 'react';

import styled from 'styled-components';

import HeroImg from '../../images/heroimg.png';
import DescriptionSection from './DescriptionSection';
import WorkTypeSection from './WorkTypeSection';

const Home = () => (
  <div>
    <HeroBanner src={HeroImg} />
    <Br />
    <DescriptionSection />
    <Br />
    <WorkTypeSection />
    <Br />
  </div>
);

const HeroBanner = styled.img`
  width: 100%;
`;

const Br = styled.div`
  padding: 4rem 0;
`;

export default Home;
