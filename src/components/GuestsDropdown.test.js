import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import GuestsDropdown, { StyledGuestsDropdown } from './GuestsDropdown.jsx';

describe('GuestsDropdown Component', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<GuestsDropdown />));

  it('renders the GuestsDropdown component', () => {
    expect(wrapper.find(StyledGuestsDropdown).length).toBe(1);
  });

  it('matches the snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
