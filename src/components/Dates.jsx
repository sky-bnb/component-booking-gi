import React from 'react';
import styled from 'styled-components';
import DatesDropdown from './DatesDropdown.jsx';

const StyledDates = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const StyledSVG = styled.svg`
  display: table-cell;
  height: 24px;
  width: 24px;
  padding: 8px 0px 8px 0px;
  margin: 0px;
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
  display: table;
  height: 40px;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(235, 235, 235);
  border-radius: 2px;
`;

const StyledDatesRow = styled.div`
  display: table-row;
  table-layout: fixed;
  width: 100%;
  height: 40px;
`;

const StyledDateField = styled.div`
  display: table-cell;
  font-weight: 400;
  font-size: 17px;
  color: rgb(117, 117, 117);
  vertical-align: middle;
  margin: 0px;
  padding: 8px 14px 8px 14px;
  background: rgb(255, 255, 255);
  width: auto;
`;

const StyledDateInput = styled.input`
  position: absolute;
  font-size: 16px;
  font-weight: 400;
  opacity: 0;
  height: 100%;
  width: 100%;
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

const Dates = (props) => {
  const {
    isCheckinOpen, isCheckoutOpen, calendarMonth, updateCalendarMonth
  } = props;

  return (
    <StyledDates>
      <StyledDateLabel>Dates</StyledDateLabel>
      <StyledDatesBox>
        <StyledDatesRow>
          <StyledDateInput placeholder="Check-in" />  
          <StyledDateField>Check-in</StyledDateField>
          <StyledSVG viewBox="0 0 24 24" role="presentation" focusable="false">
            <path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z" fillRule="evenodd" />
          </StyledSVG>
          <StyledDateInput placeholder="Checkout" />
          <StyledDateField>Checkout</StyledDateField>
        </StyledDatesRow>
      </StyledDatesBox>
      {isCheckinOpen || isCheckoutOpen ? <DatesDropdown
        isCheckinOpen={isCheckinOpen}
        isCheckoutOpen={isCheckoutOpen}
        calendarMonth={calendarMonth}
        updateCalendarMonth={updateCalendarMonth}
        /> : null}
    </StyledDates>
  );
};

export default Dates;
