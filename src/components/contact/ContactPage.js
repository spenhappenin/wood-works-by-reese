import React, { useState, } from 'react';

import styled from 'styled-components';

import background from '../../images/work-background.jpg';
import { BigText, Br, } from '../../styles/shared';
import { Button, Form, FormGroup, TextField, TextArea, } from '../../styles/form';

const ContactPage = () => (
  <Container>
    <BigText>Contact</BigText>
    <Br />
    <p>Insert some message about inqueries and basic information....</p>
    <Br />
    <Form>
      <FormGroup>
        <TextField
          name="firstName"
          label="First Name"
          type="text"
          required
          placeholder="First Name"
          />
        <TextField
          name="lastName"
          label="Last Name"
          type="text"
          required
          placeholder="Last Name"
        />
      </FormGroup>

      <TextField
        name="email"
        label="email"
        type="email"
        required
        placeholder="Email"
      />
      <TextField
        name="subject"
        label="subject"
        type="text"
        required
        placeholder="Subject"
      />
      <TextArea
        name="message"
        label="message"
        required
        height={200}
      />
      <Button type="submit">submit</Button>
    </Form>
  </Container>
);

const Container = styled.div`
  background-image: url(${background});
  /* background-position: unset;
  background-position-y: bottom; */
  background-position-y: top;
  padding: 55px 5% 55px 5%;
`;

export default ContactPage;
