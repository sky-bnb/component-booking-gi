import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Report, { StyledReport } from './Report.jsx';

describe('Report Component', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Report />));

  it('renders the Report component', () => {
    expect(wrapper.find(StyledReport).length).toBe(1);
  });

  it('matches the snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
