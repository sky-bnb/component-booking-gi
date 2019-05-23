import React from 'react';
import styled from 'styled-components';
import GuestsButton from './GuestsButton.jsx';
import GuestsDropdown from './GuestsDropdown.jsx';

const StyledGuests = styled.div`
  margin-bottom: 16px;
`;

const StyledGuestsLabel = styled.label`
  margin: 0px;
  word-wrap: break-word;
  font-family: 'Quicksand', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.3333333333333333em;
  color: #484848;
`;

const Guests = (props) => (
  <StyledGuests>
    <StyledGuestsLabel>Guests</StyledGuestsLabel>
    <GuestsButton isOpen={props.isOpen} toggle={props.toggle} />
    {props.isOpen ? <GuestsDropdown /> : null}
  </StyledGuests>
);

export default Guests;
