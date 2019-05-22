import React from 'react';
import styled from 'styled-components';
import CloseButton from './CloseButton.jsx';
import Price from './Price.jsx';
import Reviews from './Reviews.jsx';
import Dates from './Dates.jsx';
import Guests from './Guests.jsx';
import Book from './Book.jsx';
import Info from './Info.jsx';

const StyledBooking = styled.div`
  padding: 24px;
  width: 328px;
  height: 462px;
  margin: 0px;
  fontFamily: sans-serif;
`;

// StyledBooking.displayName = 'StyledBooking';

const StyledBreak = styled.div`
  width: 328px;
  height: 0px;
  border: 1px;
  border-bottom-style: solid;
  border-bottom-color: #EBEBEB;
`;

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numViews: 0,
      numReviews: 213,
    };
  }

  render() {
    return <StyledBooking>
      <CloseButton />
      <Price />
      <Reviews numReviews={this.state.numReviews} />
      <StyledBreak />
      <Dates />
      <Guests />
      <Book />
      <StyledBreak />
      <Info numViews={this.state.numViews}/>
    </StyledBooking>;
  }
}

export default Booking;
