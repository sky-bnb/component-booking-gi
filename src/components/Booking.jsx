import React from 'react';
import styled from 'styled-components';
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

// StyledBooking.displayName = 'StyledBooking';

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
      numAdults: 0,
      numChildren: 0,
      numInfants: 0,
    };

    this.toggleGuestsDropdown = this.toggleGuestsDropdown.bind(this);
    this.updateNumAdults = this.updateNumAdults.bind(this);
    this.updateNumChildren = this.updateNumChildren.bind(this);
    this.updateNumInfants = this.updateNumInfants.bind(this);
  }

  toggleGuestsDropdown(e) {
    e.preventDefault();
    const { isGuestsOpen } = this.state;
    this.setState({ isGuestsOpen: !isGuestsOpen });
  }

  updateNumAdults(value) {
    this.setState(prev => ({ numAdults: prev.numAdults += value }));
  }

  updateNumChildren(value) {
    this.setState(prev => ({ numChildren: prev.numChildren += value }));
  }

  updateNumInfants(value) {
    this.setState(prev => ({ numInfants: prev.numInfants += value }));
  }

  render() {
    const {
      numReviews, rating, isCheckinOpen, isGuestsOpen, numAdults, numChildren, numInfants, numViews,
    } = this.state;

    return (
      <StyledBooking>
        <CloseButton />
        <Price />
        <Reviews numReviews={numReviews} rating={rating} />
        <StyledBreak />
        <Dates isCheckinOpen={isCheckinOpen} />
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
