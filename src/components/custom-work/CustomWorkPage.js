import React from 'react';

import styled from 'styled-components';

// import heroImage from '../../images/customWork/custom-work-hero.jpg';
import CustomWorksSection from './CustomWorksSection';
import GallerySection from './GallerySection';
import { Br, } from '../../styles/shared';

const CustomWork = () => {
  return (
    <div>
      {/* <HeroBanner src={heroImage} /> */}
      <HeroBanner src="https://res.cloudinary.com/dtb6lx1s4/image/upload/v1592861053/wood%20works%20by%20reese/Photo_Mar_21_5_42_42_PM.jpg" />
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
