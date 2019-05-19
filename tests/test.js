import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Booking from '../src/components/Booking.jsx';
import BookingModel from '../database/schema.js';

describe('Booking Component', () => {
  it('renders the Booking element', () => {
    const wrapper = shallow(<Booking />);
    expect(wrapper.hasClass('booking')).toEqual(true);
  });
});

// describe('Database', () => {
//   it('retrieves listing data from the database', () => {
//     return BookingModel.find({ _id: 110 }).exec()
//       .then(data => expect(data._id).toBe(110));
//   });
// });