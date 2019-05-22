import React from 'react';
import styled from 'styled-components';

const StyledPriceAmt = styled.div`
  
`;

const StyledPricePerNight = styled.div`
  font-size: 12px;
  line-height: 1.33333em;
  color: rgb(72, 72, 72);
  margin: 0px;
`;

const Price = () => (
  <div className="price">
    <StyledPriceAmt>$100</StyledPriceAmt>
    <StyledPricePerNight>per night</StyledPricePerNight>
  </div>
);

export default Price;
