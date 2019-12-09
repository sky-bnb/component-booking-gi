import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import GuestsButton, { StyledGuestsButton } from './GuestsButton.jsx';

describe('GuestsButton Component', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<GuestsButton onClick={() => null} isOpen={false} />));

  it('renders the GuestsButton component', () => {
    expect(wrapper.find(StyledGuestsButton).length).toBe(1);
  });

  it('matches the snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
