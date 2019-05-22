import React from 'react';
import styled from 'styled-components';

const StyledDates = styled.div`

`;

const Dates = () => (
  <StyledDates>
    <div className="text">Dates</div>
    <div className="input">
      <div className="checkin" style={{ display: "inline" }}>CHECKIN ***</div>
      <div className="checkout" style={{ display: "inline" }}>*** CHECKOUT</div>
    </div>
  </StyledDates>
);

export default Dates;
