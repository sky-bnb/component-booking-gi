import React from 'react';
import styled from 'styled-components';
// import moment from 'moment';
import Calendar from './Calendar.jsx';

const StyledDatesDropdown = styled.div`
  width: 332px;
  height: 308px;
  margin-top: 65px;
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px;
  position: absolute;
  z-index: 2;
  transition: height 0.2s ease-in-out 0s;
`;

const StyledButton = styled.button`
  cursor: pointer;
  user-select: none;
  background-color: rgb(255, 255, 255);
  color: rgb(117, 117, 117);
  top: 18px;
  line-height: 0.78;
  left: 22px;
  margin: 0px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(228, 231, 231);
  border-image: initial;
  border-radius: 3px;
  padding: 6px 9px;
`;

const StyledSVG = styled.svg`
  fill: rgb(117,117,117);
`;

const StyledCalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  padding: 22px 0px 15px 0px;
`;

const StyledWeekTitleRow = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0px 10px;
  margin: 1px 0px;
  list-style: none;
`;

const StyledWeekTitle = styled.li`
  height: 20px;
  width: 41px;
  padding: 0px;
  color: rgb(117, 117, 117)
  font-size: smaller;
  text-align: center;
  line-height: 1.43;
`;

const StyledMonthTitle = styled.div`
  color: rgb(72, 72, 72);
  font-family: 'Quicksand', sans-serif;
  font-size: 18px;
`;

const DatesDropdown = (props) => {
  const { calendarMonth, updateCalendarMonth } = props;

  return (
  <StyledDatesDropdown>
    <StyledCalendarHeader>
      <StyledButton onClick={() => updateCalendarMonth(-1)}>
        <StyledSVG focusable="false" viewBox="0 0 1000 1000" height="19px" width="19px"><path d="M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z" /></StyledSVG>
      </StyledButton>
      <StyledMonthTitle>{calendarMonth.format('MMMM YYYY')}</StyledMonthTitle>
      <StyledButton onClick={() => updateCalendarMonth(1)}>
        <StyledSVG focusable="false" viewBox="0 0 1000 1000" height="19px" width="19px"><path d="M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z" /></StyledSVG>
      </StyledButton>
    </StyledCalendarHeader>

      <StyledWeekTitleRow>
        <StyledWeekTitle><small>Su</small></StyledWeekTitle>
        <StyledWeekTitle><small>Mo</small></StyledWeekTitle>
        <StyledWeekTitle><small>Tu</small></StyledWeekTitle>
        <StyledWeekTitle><small>We</small></StyledWeekTitle>
        <StyledWeekTitle><small>Th</small></StyledWeekTitle>
        <StyledWeekTitle><small>Fr</small></StyledWeekTitle>
        <StyledWeekTitle><small>Sa</small></StyledWeekTitle>
      </StyledWeekTitleRow>

    <Calendar calendarMonth={calendarMonth}/>
  </StyledDatesDropdown>
  );
};

export default DatesDropdown;
