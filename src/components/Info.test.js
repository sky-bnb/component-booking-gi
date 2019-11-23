import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Info, { StyledInfo } from './Info.jsx';

describe('Info Component', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Info />));

  it('renders the Info component', () => {
    expect(wrapper.find(StyledInfo).length).toBe(1);
  });

  it('matches the snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
