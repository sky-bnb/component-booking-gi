import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const StyledDay = styled.td`
  font-size: 14px;
  width: 37px;
  height: 37px;
  display: table-cell;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  line-height: 12px;
  text-align: center;
  text-decoration: line-through;
  color: rgb(216, 216, 216);
  border: ${({ isBlank }) => isBlank ? 'none' : '1px double rgb(228, 231, 231)'};
  border-spacing: 0px;
  padding: 1px;
  margin: 0px;
`;

const Day = (props) => {
  const { calendarMonth, date, isBlank } = props;
  const dateString = date ? moment(calendarMonth).format('YYYY-MM').toString().concat('-', date.toString().padStart(2, '0')) : null;

  return <StyledDay value={dateString} isBlank={isBlank} onClick={() => console.log(dateString)}>{date}</StyledDay>;
};

export default Day;
