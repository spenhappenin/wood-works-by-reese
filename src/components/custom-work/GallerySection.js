import React from 'react';

import Gallery from 'react-grid-gallery';
import styled from 'styled-components';

import { images, } from '../../data/custom-work';

const GallerySection = () => {
  return (
    <Container>
      <BigText>Gallery</BigText>
      <Gallery
        rowHeight={250}
        margin={5}
        images={images}
        enableImageSelection={false}
      />
    </Container>
  );
};

/* background-image: url(${background}); */
const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  background-position: top;
  padding: 55px 5% 0 5%;

  @media (max-width: 1100px) {
    background-position: unset;
    background-position-y: bottom;
  }

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const BigText = styled.h1`
  font-family: 'PT Serif Caption', serif;
  font-size: 2.5rem;
  font-weight: normal;
  color: #585858;
`;

export default GallerySection;
