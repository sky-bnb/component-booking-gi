import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Guests, { StyledGuests } from './Guests.jsx';

describe('Guests Component', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Guests />));

  it('renders the Guests component', () => {
    expect(wrapper.find(StyledGuests).length).toBe(1);
  });

  it('matches the snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
