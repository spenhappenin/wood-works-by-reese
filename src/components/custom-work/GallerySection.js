import React from 'react';

import styled from 'styled-components';

import cabinets from '../../images/customWork/cabinets.jpg';
import desks from '../../images/customWork/desks.jpg';
import tables from '../../images/customWork/tables.jpg';

const GallerySection = () => {
  return (
    <Container>
      <BigText>Gallery</BigText>
      <div class="row">
        {
          columns.map( co => (
            <div class="column">
              {
                co.map( c => (
                  <Image>
                    <img src={c.image} alt="cabinets" />
                  </Image>
                ))
              }
            </div>
          ))
        }
      </div>
    </Container>
  );
};

const column1 = [
  { id: 1, title: '', image: cabinets, },
  { id: 2, title: '', image: desks, },
  { id: 3, title: '', image: tables, },
];

const column2 = [
  { id: 3, title: '', image: tables, },
  { id: 1, title: '', image: cabinets, },
  { id: 2, title: '', image: desks, },
];

const column3 = [
  { id: 3, title: '', image: tables, },
  { id: 2, title: '', image: desks, },
  { id: 1, title: '', image: cabinets, },
];

const columns = [column1, column2, column3];

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

const Image = styled.div`
  flex: 25%;
  flex-direction: column;
`;

export default GallerySection;
