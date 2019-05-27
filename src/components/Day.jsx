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
  text-decoration: ${({ isActive }) => isActive ? 'none' : 'line-through'};
  color: ${({ isActive }) => isActive ? 'rgb(72, 72, 72)' : 'rgb(216, 216, 216)'};
  border: ${({ isBlank }) => isBlank ? 'none' : '1px double rgb(228, 231, 231)'};
  border-spacing: 0px;
  padding: 1px;
  margin: 0px;

  ${({ isActive }) => isActive ? ':hover { background: rgb(228, 231, 231); }' : null}
  
`;

const Day = (props) => {
  const { available, calendarMonth, date, isBlank, isCheckinOpen, isCheckoutOpen } = props;
  const dateString = date ? moment(calendarMonth).format('YYYY-MM').toString().concat('-', date.toString().padStart(2, '0')) : null;
  const isCheckinAvail = available.includes(dateString);
  const isCheckoutAvail = available.includes(moment(dateString).add(1, 'days').format('YYYY-MM-DD').toString());
  console.log(moment(dateString).add(1, 'days').toString())
  const isActive = (isCheckinAvail && isCheckinOpen) || (isCheckoutAvail && isCheckoutOpen);

  return <StyledDay value={dateString} isActive={isActive} isBlank={isBlank} onClick={() => console.log(dateString)}>{date}</StyledDay>;
};

export default Day;
