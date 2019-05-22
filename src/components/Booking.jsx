import React from 'react';
import styled from 'styled-components';
import CloseButton from './CloseButton.jsx';
import Price from './Price.jsx';
import Reviews from './Reviews.jsx';
import Break from './Break.jsx'
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

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numViews: 0
    };
  }

  render() {
    return <StyledBooking>
      <CloseButton />
      <Price />
      <Reviews />
      <Break />
      <Dates />
      <Guests />
      <Book />
      <Break />
      <Info numViews={this.state.numViews}/>
    </StyledBooking>;
  }
}

{/* <div className="text">Report this listing</div> */}

export default Booking;
