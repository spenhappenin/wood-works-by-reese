import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid #a68a80;
  padding: 10px 20px;
  font-family: 'PT Sans Caption', sans-serif;
  color: #a68a80;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 3px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #a68a80;
    color: #fff;
    transition: background 0.3s ease;
  }

  &:focus {
    outline: 0;
  }
`;

export const Container = styled.div`
  padding: 0 5%;
`;

// PROPS - Text //
// textSize : int
// titleFont : boolean
// uppercase : boolean
// bold : boolean

export const Text = styled.p`
  font-family: ${ props => props.titleFont ? "'PT Sans Caption', sans-serif" : "'PT Serif Caption', serif" };
  font-size: ${ props => `${props.textSize}px`};
  text-transform: ${ props => props.uppercase ? 'uppercase' : 'none' };
  font-weight: ${ props => props.bold ? 'bold' : 'normal' };
`;
