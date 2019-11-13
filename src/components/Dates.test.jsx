import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Dates, { StyledDates } from './Dates.jsx';

describe('Dates Component', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Dates />));

  it('renders the Dates component', () => {
    expect(wrapper.find(StyledDates).length).toBe(1);
  });

  it('matches the snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
