import React from 'react';
import styled from 'styled-components';

const StyledDatesDropdown = styled.div`
  width: 332px;
  height: 308px;
  margin-top: 65px;
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px;
  position: absolute;
  z-index: 2;
`;

const DatesDropdown = (props) => (
  <StyledDatesDropdown>DATES DROPDOWN</StyledDatesDropdown>
);

export default DatesDropdown;
