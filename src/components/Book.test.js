import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Book, { StyledBookForm } from './Book.jsx';

describe('Book Component', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Book />));

  it('renders the Booking element', () => {
    expect(wrapper.find(StyledBookForm).length).toBe(1);
  });

  it('matches the snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
