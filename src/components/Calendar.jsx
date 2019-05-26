import React from 'react';
import styled from 'styled-components';
import Day from './Day.jsx';

const StyledCalendar = styled.table`
  padding: 0px 10px;
  border-collapse: collapse;
  display: flex;
  justify-content: center;
`;

const StyledRow = styled.tr`
  height: 41px;
  width: 288px;
`;

// change size of calendar based on number of rendered weeks?

const buildMonth = (firstDayOfMonth, daysInMonth) => {
  const daysArray = Array(firstDayOfMonth);
  const monthArray = [];
  const dayPadding = { date: null, isBlank: true };

  daysArray.fill(dayPadding);

  for (let i = 1; i <= daysInMonth; i += 1) {
    daysArray.push({ date: i, isBlank: false });
  }

  const daysToPad = 7 - (daysArray.length % 7);

  for (let i = 0; i < daysToPad; i += 1) {
    daysArray.push(dayPadding);
  }

  for (let i = 0; i < daysArray.length / 7; i += 1) {
    const week = daysArray.slice(i * 7, (i + 1) * 7);
    monthArray.push(week);
  }

  return monthArray;
};

const Calendar = (props) => {
  const { firstDayOfMonth, daysInMonth } = props;

  return (
    <StyledCalendar>
      <tbody>{ buildMonth(firstDayOfMonth, daysInMonth).map(week => 
        <StyledRow>{ week.map(({ date, isBlank}, index) => 
        <Day date={date} key={index} isBlank={isBlank} />) }</StyledRow>) }</tbody>
    </StyledCalendar>
  );
};

export default Calendar;
