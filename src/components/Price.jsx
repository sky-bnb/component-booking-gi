import React from 'react';
import styled from 'styled-components';

const StyledPrice = styled.div`
  display: flex;
  align-items: flex-end;
  height: 28px;
`;

const StyledPriceAmt = styled.div`
  font-size: 22px;
  overflow-wrap: break-word;
  font-family: sans-serif;
  font-weight: 800;
  line-height: 1.44444em;
  color: rgb(72, 72, 72);
  -webkit-font-smoothing: antialiasing;
  height: 23px;
`;

const StyledPricePerNight = styled.div`
  font-size: 12px;
  line-height: 1.33333em;
  color: rgb(72, 72, 72);
  margin: 0px;
  vertical-align: bottom;
  height: 18px;
`;

const Price = () => (
  <StyledPrice>
    <StyledPriceAmt>$100</StyledPriceAmt>
    <StyledPricePerNight>per night</StyledPricePerNight>
  </StyledPrice>
);

export default Price;
