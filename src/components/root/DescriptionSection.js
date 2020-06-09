import React from 'react';

import styled from 'styled-components';

import tree1 from '../../images/tree1.png';
import tree2 from '../../images/tree2.png';
import tree3 from '../../images/tree3.png';
import { Button, Text, } from '../../styles/shared';

const descriptions = [
  { title: 'design with benefits', buttonText: 'view collection', img: tree1, text: 'New York Heartwoods creates timeless, lasting wood furniture and custom designs that capture the beauty and history of the Hudson Valley\'s urban forests. Using wood from storm-downed and urban trees, we fabricate enduring pieces so that trees can grow.', },
  { title: 'made with care', buttonText: 'view custom', img: tree2, text: 'Everything we make is meticulously crafted to highlight our wood’s unique features. Whether made from our clients’ own trees or from our inventory of lumber and live-edge slabs, each piece is one of a kind due to its origin story. We work closely with our customers to create objects they will cherish.', },
  { title: 'focused on the future', buttonText: 'read more', img: tree3, text: 'To continue the cycle of life that makes our work possible, we donate to forest conservation and urban forestry programs. We aim to produce zero waste - donating our wood scraps to a local wood fired bread maker and sawdust to farmers and pit firing ceramicists - and plant more trees than we use.', },
];

const DescriptionSection = () => {
  return (
    <Container>
      <BigText>Beatiful, Purposeful, and Impactful Fine Furniture and Custom Designs</BigText>
      <div>
        { descriptions.map( ({ title, text, buttonText, img, }) => (
          <SectionWrapper>
            <Image src={img} alt={title} />
            <TextContainer>
              <Text
                titleFont
                uppercase
                bold
                textSize={18}
                title
              >
                { title }
              </Text>
              <Text titleFont textSize={14}>{ text }</Text>
              <Button>{ buttonText }</Button>
            </TextContainer>
          </SectionWrapper>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background: #f3eee7;
  padding: 0 5%;

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

const SectionWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 750px) {
    align-items: center;
  }
`;

const Image = styled.img`
  height: 100px;
  margin-right: 10px;
`;

export default DescriptionSection;
