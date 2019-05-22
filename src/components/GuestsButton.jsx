import React from 'react';
import styled from 'styled-components';

const StyledGuestsButton = styled.button`
  text-align: left;
  line-height: normal;
  display: block;
  width: 100%;
  background: rgb(255, 255, 255);
  border-radius: 2px;
  padding: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(235, 235, 235);
  border-image: initial;
`;

const GuestsButton = () => (
  <StyledGuestsButton />
);

export default GuestsButton;
