import React from 'react';
import styled from 'styled-components';

const StyledGuests = styled.div`
`;

const StyledGuestsText = styled.div`
`;

const Guests = () => (
  <StyledGuests>
    <StyledGuestsText>Guests</StyledGuestsText>
    <div className="guestdropdown"></div>
  </StyledGuests>
);

export default Guests;
