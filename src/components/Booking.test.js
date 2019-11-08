import React from 'react';
import { shallow } from 'enzyme';

import Booking, { StyledStickyModule } from './Booking.jsx';

describe('Booking Component', () => {
  it('renders the Booking element', () => {
    const wrapper = shallow(<Booking />);
    expect(wrapper.find(StyledStickyModule).length).toBe(1);
  });
});
