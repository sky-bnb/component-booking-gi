import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Price, { StyledPrice } from './Price.jsx';

describe('Price Component', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Price />));

  it('renders the Price component', () => {
    expect(wrapper.find(StyledPrice).length).toBe(1);
  });

  it('matches the snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
