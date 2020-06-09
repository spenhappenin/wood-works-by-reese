import React from 'react';

import styled from 'styled-components';

import collectionImage from '../../images/collection-image.png';
import customImage from '../../images/custom-image.png';
import { Button, } from '../../styles/shared';

const WorkSection = () => (
  <Container>
    <div>
      <Image src={collectionImage} />

    </div>
    <Image src={customImage} />
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Image = styled.img`
  width: 350px;
`;

export default WorkSection;
