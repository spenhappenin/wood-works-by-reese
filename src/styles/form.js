import React from 'react';

import styled from 'styled-components';

// #######  IMPORTABLE COMPONENTS  #######

export const Form = styled.form`
  position: relative;
  max-width: 100%;
  font-size: 1rem;
  margin-top: 0em;
`;

export const FormGroup = styled.div`
  display: flex;

  @media (max-width: 675px) {
    flex-direction: column;
  }
`;

export const TextField = ({ type, name, label, required, placeholder, }) => (
  <InputContainer>
    <Label>{ label }</Label>
    <Input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
    />
  </InputContainer>
);

export const TextArea = ({ name, label, required, height, placeholder, }) => (
  <InputContainer>
    <Label htmlFor={name}>{label}</Label>
      <TextAreaField
        type="textarea"
        name={name}
        id={name}
        required={required}
        height={height}
        placeholder={placeholder}
      />
  </InputContainer>
);

export const Button = styled.button`
  border: 1px solid #232323;
  padding: 10px 20px;
  font-family: 'PT Sans Caption', sans-serif;
  color: #232323;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 3px;
  background: #fff;
  letter-spacing: 2px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #232323;
    color: #fff;
    transition: background 0.3s ease;
  }

  &:focus {
    outline: 0;
  }
`;

//  #######  COMPONENT STYLES  #######

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  width: 100%;
  flex: 1 1 auto;
  padding-left: .5em;
  padding-right: .5em;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: .92857143em;
  font-weight: 500;
  text-transform: none;
  text-transform: uppercase;
`;

const Input = styled.input`
  background: #fff;
  padding: .67857143em 1em;
  border: 1px solid rgba(34, 36, 38, 0.33);
  color: rgba(0,0,0,.87);
  border-radius: .28571429rem;
  line-height: 1.21428571em;
  font-family: 'PT Sans Caption', sans-serif;
  margin: 0;
  box-shadow: 0 0 0 0 transparent inset;
  font-size: 1em;
  outline: none !important;
`;

const TextAreaField = styled.textarea`
  background: #fff;
  padding: .67857143em 1em;
  border: 1px solid rgba(34, 36, 38, 0.33);
  color: rgba(0,0,0,.87);
  border-radius: .28571429rem;
  line-height: 1.21428571em;
  font-family: 'PT Sans Caption', sans-serif;
  margin: 0;
  box-shadow: 0 0 0 0 transparent inset;
  font-size: 1em;
  outline: none !important;
  resize: vertical;
  height: ${ props => `${props.height}px`};
`;
