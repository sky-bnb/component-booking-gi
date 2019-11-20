import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Reviews, { StyledReviews } from './Reviews.jsx';

describe('Reviews Component', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Reviews avgRating={0} numReviews={0} />));

  it('renders the Reviews component', () => {
    expect(wrapper.find(StyledReviews).length).toBe(1);
  });

  it('matches the snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
