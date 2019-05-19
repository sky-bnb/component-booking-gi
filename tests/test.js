import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Booking from '../src/components/Booking.jsx';

describe('Booking Component', () => {
  it('renders the Booking element', () => {
    const wrapper = shallow(<Booking />);
    expect(wrapper.hasClass('booking')).toEqual(true);
  });
});