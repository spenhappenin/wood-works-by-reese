import React from 'react';

import styled from 'styled-components';

import heroImage from '../../images/customWork/custom-work-hero.jpg';
import CustomWorksSection from './CustomWorksSection';
import GallerySection from './GallerySection';
import { Br, } from '../../styles/shared';

const CustomWork = () => {
  return (
    <div>
      <HeroBanner src={heroImage} />
      <Br />
      <CustomWorksSection />
      <Br />
      <GallerySection />
    </div>
  );
};

const HeroBanner = styled.img`
  width: 100%;
`;

export default CustomWork;
