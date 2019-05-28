import React from 'react';
import styled from 'styled-components';

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
  border: ${props => props.isBlank ? 'none' : '1px double rgb(228, 231, 231)'};
  border-spacing: 0px;
  padding: 1px;
  margin: 0px;
`;

const Day = (props) => {
  const { date, isBlank } = props;

  return <StyledDay isBlank={isBlank}>{date}</StyledDay>;
};

export default Day;
