import React from 'react';
import styled from 'styled-components';
import GuestsButton from './GuestsButton.jsx';
import GuestsDropdown from './GuestsDropdown.jsx';

export const StyledGuests = styled.div`
  margin-bottom: 16px;
  position: relative;
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

const Guests = (props) => {
  const {
    isOpen, toggle, numAdults, numChildren, numInfants, guestMax, maxInfants,
    updateNumAdults, updateNumChildren, updateNumInfants,
  } = props;

  return (
    <StyledGuests>
      <StyledGuestsLabel>Guests</StyledGuestsLabel>
      <GuestsButton
        isOpen={isOpen}
        toggle={toggle}
        numAdults={numAdults}
        numChildren={numChildren}
        numInfants={numInfants}
      />
      {isOpen ? (
        <GuestsDropdown
          toggle={toggle}
          numAdults={numAdults}
          numChildren={numChildren}
          numInfants={numInfants}
          guestMax={guestMax}
          maxInfants={maxInfants}
          updateNumAdults={updateNumAdults}
          updateNumChildren={updateNumChildren}
          updateNumInfants={updateNumInfants}
        />
      ) : null}
    </StyledGuests>
  );
};

export default Guests;
