import React from 'react';
import CloseButton from './CloseButton.jsx';
import Price from './Price.jsx';
import Reviews from './Reviews.jsx';
import Break from './Break.jsx'
import Dates from './Dates.jsx';
import Guests from './Guests.jsx';
import Book from './Book.jsx';
import Info from './Info.jsx';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numViews: 0
    };
  }

  render() {
    return <div className="booking" style={{ padding: "24px", maxWidth: "328px", maxHeight: "462px", minWidth: "328px", minHeight: "462px", margin: "0px", fontFamily: "sans-serif"}}>
      <CloseButton />
      <Price />
      <Reviews />
      <Break />
      <Dates />
      <Guests />
      <Book />
      <Break />
      <Info numViews={this.state.numViews}/>
    </div>;
  }
}

{/* <div className="text">Report this listing</div> */}

export default Booking;
