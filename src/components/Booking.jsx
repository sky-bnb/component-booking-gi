import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import CloseButton from './CloseButton.jsx';
import Price from './Price.jsx';
import Reviews from './Reviews.jsx';
import Dates from './Dates.jsx';
import Guests from './Guests.jsx';
import Book from './Book.jsx';
import Info from './Info.jsx';
import Report from './Report.jsx';

const StyledBooking = styled.div`
  padding: 16px 24px 24px 24px;
  width: 326px;
  height: 462px;
  margin: 0px;
  border: 1px solid #e4e4e4;
  font-family: 'Quicksand', sans-serif;
`;

const StyledBreak = styled.div`
  width: 328px;
  height: 0px;
  border: 1px;
  border-bottom-style: solid;
  border-bottom-color: #EBEBEB;
  margin-top: 24px;
  margin-bottom: 24px;
`;

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numReviews: 102,
      numViews: 0,
      rating: 4.3,
      isCheckinOpen: false,
      isCheckoutOpen: false,
      isGuestsOpen: false,
      numAdults: 1,
      numChildren: 0,
      numInfants: 0,
      calendarMonth: moment(),
    };

    this.toggleGuestsDropdown = this.toggleGuestsDropdown.bind(this);
    this.updateCalendarMonth = this.updateCalendarMonth.bind(this);
    this.updateNumAdults = this.updateNumAdults.bind(this);
    this.updateNumChildren = this.updateNumChildren.bind(this);
    this.updateNumInfants = this.updateNumInfants.bind(this);
  }

  toggleGuestsDropdown(e) {
    e.preventDefault();
    const { isGuestsOpen } = this.state;
    this.setState({ isGuestsOpen: !isGuestsOpen });
  }

  updateCalendarMonth(value) {
    const { calendarMonth } = this.state;
    this.setState({ calendarMonth: calendarMonth.add(value, 'months') });
  }

  updateNumAdults(value) {
    this.setState(({ numAdults }) => ({ numAdults: numAdults += value }));
  }

  updateNumChildren(value) {
    this.setState(({ numChildren }) => ({ numChildren: numChildren += value }));
  }

  updateNumInfants(value) {
    this.setState(({ numInfants }) => ({ numInfants: numInfants += value }));
  }

  render() {
    const {
      numReviews, rating, isCheckinOpen, isCheckoutOpen, isGuestsOpen, numAdults,
      numChildren, numInfants, numViews, calendarMonth,
    } = this.state;

    return (
      <StyledBooking>
        <CloseButton />
        <Price />
        <Reviews numReviews={numReviews} rating={rating} />
        <StyledBreak />
        <Dates
          isCheckinOpen={isCheckinOpen}
          isCheckoutOpen={isCheckoutOpen}
          calendarMonth={calendarMonth}
          updateCalendarMonth={this.updateCalendarMonth}
        />
        <Guests
          isOpen={isGuestsOpen}
          toggle={this.toggleGuestsDropdown}
          numAdults={numAdults}
          numChildren={numChildren}
          numInfants={numInfants}
          updateNumAdults={this.updateNumAdults}
          updateNumChildren={this.updateNumChildren}
          updateNumInfants={this.updateNumInfants}
        />
        <Book />
        <StyledBreak />
        <Info numViews={numViews} />
        <Report />
      </StyledBooking>
    );
  }
}

export default Booking;
