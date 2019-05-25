import React from 'react';
import styled from 'styled-components';

const StyledDay = styled.td`
  width: 39px;
  height: 39px;
  display: table-cell;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  line-height: 12px;
  text-align: center;
  color: rgb(216, 216, 216);
  border: 1px double rgb(228, 231, 231);
`;

const Day = (props) => {
  const { date, isBlank } = props;

  return <StyledDay isBlank={isBlank}>{date}</StyledDay>;
};

export default Day;
