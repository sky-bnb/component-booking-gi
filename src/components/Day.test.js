import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import moment from 'moment';

import Day, { StyledDay } from './Day.jsx';

const {
  available,
  calendarMonth,
  date,
  index,
  isBlank,
  isCheckinOpen,
  isCheckoutOpen,
  checkinValue,
  checkoutValue,
  updateCheckinDate,
  updateCheckoutDate,
} = {
  available: ['2019-06-02', '2019-07-01'],
  calendarMonth: moment(),
  date: 1,
  key: 1,
  isBlank: false,
  isCheckinOpen: false,
  checkinValue: '',
  isCheckoutOpen: false,
  checkoutValue: '',
  updateCheckinDate: () => null,
  updateCheckoutDate: () => null,
};

describe('Day Component', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Day available={available}
    calendarMonth={calendarMonth}
    date={date}
    key={index}
    isBlank={isBlank}
    isCheckinOpen={isCheckinOpen}
    isCheckoutOpen={isCheckoutOpen}
    checkinValue={checkinValue}
    checkoutValue={checkoutValue}
    updateCheckinDate={updateCheckinDate}
    updateCheckoutDate={updateCheckoutDate}
  />));

  it('renders the Day component', () => {
    expect(wrapper.find(StyledDay).length).toBe(1);
  });

  it('matches the snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
