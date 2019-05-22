import React from 'react';
import styled from 'styled-components';

const StyledDates = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const StyledSVG = styled.svg`
  height: 24px;
  width: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
  flex-shrink: 0;
`;

const StyledDateLabel = styled.label`
  overflow-wrap: break-word;
  font-family: 'Quicksand', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33333em;
  color: rgb(72, 72, 72);
  margin: 0px;
`;

const StyledDatesBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(235, 235, 235);
  border-radius: 2px;
`;

const StyledDateField = styled.div`
  display: block;
  font-weight: normal;
  font-size: 17px;
  line-height: 24px;
  color: rgb(117, 117, 117);
  width: 100%;
  vertical-align: middle;
  margin: 0px;
  padding: 8px;
  background: rgb(255, 255, 255);
`;

const StyledDateInput = styled.input`
  font-size: 16px;
  font-weight: 400;
  opacity: 0;
  height: 100%;
  width: 40%;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  margin: 0em;
  font: 400 11px system-ui;
  padding: 1px;
`;

const Dates = () => (
  <StyledDates>
    <StyledDateLabel>Dates</StyledDateLabel>
    <StyledDatesBox>
      <StyledDateField>Check-in
        <StyledDateInput placeholder="Check-in" />
      </StyledDateField>
      <StyledSVG viewBox="0 0 24 24" role="presentation" focusable="false" height="24px" width="24px">
        <path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z" fillRule="evenodd" />
      </StyledSVG>
      <StyledDateField>Checkout
        <StyledDateInput placeholder="Checkout" />
      </StyledDateField>
    </StyledDatesBox>
  </StyledDates>
);

export default Dates;
