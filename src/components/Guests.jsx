import React from 'react';
import styled from 'styled-components';
import GuestsButton from './GuestsButton.jsx';

const StyledGuests = styled.div`
`;

const StyledGuestsText = styled.div`
  margin: 0px;
  word-wrap: break-word;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.3333333333333333em;
  color: #484848;
`;

const Guests = () => (
  <StyledGuests>
    <StyledGuestsText>Guests</StyledGuestsText>
    <GuestsButton />
  </StyledGuests>
);

export default Guests;
