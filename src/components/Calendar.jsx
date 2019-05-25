import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Day from './Day.jsx';

const StyledCalendar = styled.table`
  padding: 0px 10px;
`;

// change size of calendar based on number of rendered weeks?

const buildMonth = dateObj => {
  const firstDayOfMonth = dateObj.startOf('month').format('d');
  const daysInMonth = dateObj.endOf('month').format('D');
  const daysArray = [];
  const monthArray = [];
  const empty = { date: null, isBlank: true };

  for (let i = 0; i < firstDayOfMonth; i += 1) {
    daysArray.push(empty);
  }

  for (let i = 1; i <= daysInMonth; i += 1) {
    daysArray.push({ date: i, isBlank: false });
  }
  
  const daysToPad = 7 - (daysArray.length % 7);

  for (let i = 0; i < daysToPad; i += 1) {
    daysArray.push(empty);
  }

  for (let i = 0; i < daysArray.length / 7; i += 1) {
    const week = daysArray.slice(i * 7, (i + 1) * 7);
    monthArray.push(week);
  }

  return monthArray;
}

const month = buildMonth(moment("2019-03"))

const Calendar = (props) => {
  const { calendarMonth } = props;

  return (
    <StyledCalendar>
      <tbody>{buildMonth(calendarMonth).map(week => <tr>{ week.map(({ date, isBlank}, index) => <Day date={date} key={index} isBlank={isBlank} />) }</tr> )}</tbody>
    </StyledCalendar>
  );
};

export default Calendar;
