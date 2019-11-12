import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Booking, { StyledStickyModule } from './Booking.jsx';

describe('Booking Component', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Booking />));

  it('renders the Booking component', () => {
    expect(wrapper.find(StyledStickyModule).length).toBe(1);
  });

  it('matches the snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
