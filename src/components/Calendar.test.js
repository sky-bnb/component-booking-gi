import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Calendar, { StyledCalendar } from './Calendar.jsx';

describe('Calendar Component', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Calendar />));

  it('renders the Calendar component', () => {
    expect(wrapper.find(StyledCalendar).length).toBe(1);
  });

  it('matches the snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
