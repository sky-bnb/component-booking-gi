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
  width: 90%;
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
      checkinValue: '',
      isCheckoutOpen: false,
      checkoutValue: '',
      isGuestsOpen: false,
      numAdults: 1,
      numChildren: 0,
      numInfants: 0,
      maxGuests: 5,
      maxInfants: 5,
      calendarMonth: moment(),
      available: [],
    };

    this.toggleGuestsDropdown = this.toggleGuestsDropdown.bind(this);
    this.toggleCheckinDropdown = this.toggleCheckinDropdown.bind(this);
    this.toggleCheckoutDropdown = this.toggleCheckoutDropdown.bind(this);
    this.updateCalendarMonth = this.updateCalendarMonth.bind(this);
    this.updateCheckinDate = this.updateCheckinDate.bind(this);
    this.updateCheckoutDate = this.updateCheckoutDate.bind(this);
    this.updateNumAdults = this.updateNumAdults.bind(this);
    this.updateNumChildren = this.updateNumChildren.bind(this);
    this.updateNumInfants = this.updateNumInfants.bind(this);
  }

  toggleCheckinDropdown(e) {
    e.preventDefault();
    const { isCheckinOpen } = this.state;
    this.setState({ isCheckoutOpen: false }, () => setTimeout(() => this.setState({ isCheckinOpen: !isCheckinOpen }), 5));
  }

  toggleCheckoutDropdown(e) {
    e.preventDefault();
    const { isCheckoutOpen } = this.state;
    this.setState({ isCheckinOpen: false }, () => setTimeout(() => this.setState({ isCheckoutOpen: !isCheckoutOpen }), 5));
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

  updateCheckinDate(e) {
    this.setState({ checkinValue: e.target.value });
  }

  updateCheckoutDate(e) {
    this.setState({ checkoutValue: e.target.value });
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
      numReviews, rating, isCheckinOpen, isCheckoutOpen, isGuestsOpen, numAdults, numChildren, numInfants, 
      maxGuests, maxInfants, numViews, calendarMonth, checkinValue, checkoutValue,
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
          updateCheckinDate={this.updateCheckinDate}
          updateCheckoutDate={this.updateCheckoutDate}
          checkinValue={checkinValue}
          checkoutValue={checkoutValue}
          toggleCheckinDropdown={this.toggleCheckinDropdown}
          toggleCheckoutDropdown={this.toggleCheckoutDropdown}
        />
        <Guests
          isOpen={isGuestsOpen}
          toggle={this.toggleGuestsDropdown}
          numAdults={numAdults}
          numChildren={numChildren}
          numInfants={numInfants}
          maxGuests={maxGuests}
          maxInfants={maxInfants}
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
