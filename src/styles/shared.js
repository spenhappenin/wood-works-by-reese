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
