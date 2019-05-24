import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Day from './Day.jsx';

const StyledCalendar = styled.table`
`;

const StyledHeader = styled.th`
`;

const StyledHeaderCells = styled.td`
`;

const Calendar = () => {
  const arr = [];

  for (let i = 0; i < 6; i += 1) {
    const inner = [];
    for (let j = 0; j < 7; j += 1) {
      inner.push(j + i * 7);
    }
    arr.push(inner);
  }

  return (
    <StyledCalendar>
      <caption>CALENDAR</caption>
      <thead><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead>
      <tbody>{arr.map(element => <tr>{ element.map(element => <Day date={element} key={element} isBlank={false} />) }</tr> )}</tbody>
    </StyledCalendar>
  );
};

export default Calendar;
