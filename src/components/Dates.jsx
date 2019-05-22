import React from 'react';
import styled from 'styled-components';

const StyledDates = styled.div`
  display: flow;
`;

const StyledSVG = styled.svg`
  height: 24px;
  width: 24px;
  display: block;
  fill: currentcolor;
`;

const StyledDateText = styled.div`
  overflow-wrap: break-word;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33333em;
  color: rgb(72, 72, 72);
  margin: 0px;
`;

const Dates = () => (
  <StyledDates>
    <StyledDateText>Dates</StyledDateText>
    <div className="datesInput">
      <div className="checkin" style={{ display: "block" }}>CHECKIN ***</div>
      <StyledSVG viewBox="0 0 24 24" role="presentation" focusable="false" height="24px" width="24px">
        <path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z" fillRule="evenodd" />
      </StyledSVG>
      <div className="checkout" style={{ display: "block" }}>*** CHECKOUT</div>
    </div>
  </StyledDates>
);

export default Dates;
