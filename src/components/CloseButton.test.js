import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import CloseButton, { StyledCloseButtonWrapper } from './CloseButton.jsx';

describe('Calendar Component', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<CloseButton />));

  it('renders the CloseButton component', () => {
    expect(wrapper.find(StyledCloseButtonWrapper).length).toBe(1);
  });

  it('matches the snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
