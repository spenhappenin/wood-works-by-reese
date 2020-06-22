import React from 'react';

import styled from 'styled-components';
import { Link, } from 'react-router-dom';

import background from '../../images/work-background.jpg';
import collectionImage from '../../images/collection-image.png';
import customImage from '../../images/custom-image.png';
import { Button, Text, } from '../../styles/shared';

const workTypes = [
  { title: 'collection', buttonText: 'view collection', link: '/collection', image: collectionImage, },
  { title: 'custom work', buttonText: 'view custom work', link: '/custom-work', image: customImage, },
];

const WorkTypeSection = () => {
  return (
    <Container>
      { workTypes.map( ({ title, buttonText, link, image, }) => (
        <WorkWrapper key={title}>
          <Image src={image} />
          <Text titleFont uppercase bold title>
            { title }
          </Text>
          <Link to={link}>
            <Button>{ buttonText }</Button>
          </Link>
        </WorkWrapper>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-image: url(${background});
  /* background-position: left; */
  background-position-y: top;
  padding: 50px 0;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

const Image = styled.img`
  width: 350px;
`;

export default WorkTypeSection;
