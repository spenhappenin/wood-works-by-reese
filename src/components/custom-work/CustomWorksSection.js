import React from 'react';

import background from '../../images/description-background.jpg';
import styled from 'styled-components';
import cabinets from '../../images/customWork/cabinets.jpg';
import desks from '../../images/customWork/desks.jpg';
import tables from '../../images/customWork/tables.jpg';
import { Text, } from '../../styles/shared';

const CustomWorksSection = () => {
  return (
    <Container>
      <BigText>Beatiful hand-crafted furniture and surfaces.</BigText>
      <div class="row">
        <div class="column">
          <Image>
            <img src={cabinets} alt="cabinets" />
            <Text
                titleFont
                uppercase
                bold
                textSize={14}
                title
              >
                cabinets
            </Text>
          </Image>
          <Image>
            <img src={desks} alt="desks" />
            <Text
                titleFont
                uppercase
                bold
                textSize={14}
                title
              >
                desks
            </Text>
          </Image>
        </div>
        <div class="column">
          <Image>
            <img src={tables} alt="table" />
            <Text
                titleFont
                uppercase
                bold
                textSize={14}
                title
              >
                tables
            </Text>
          </Image>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-image: url(${background});
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

const Image = styled.div`
  flex: 25%;
  flex-direction: column;
`;

export default CustomWorksSection;
