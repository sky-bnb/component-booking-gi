import React from 'react';
import styled from 'styled-components';

const StyledDay = styled.td`
  width: 41px;
  height: 41px;
  text-align: center;
  color: ${props => props.isBlank ? "grey" : "red" };
`;

const Day = (props) => {
  const { date, isBlank } = props;

  return <StyledDay isBlank={isBlank}>{date}</StyledDay>;
};

export default Day;
