import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import DatesDropdown, { StyledDatesDropdown } from './DatesDropdown.jsx';

const {
  isCheckinOpen,
  isCheckoutOpen,
  checkinValue,
  checkoutValue,
  calendarMonth,
  updateCalendarMonth,
  available,
  updateCheckinDate,
  updateCheckoutDate,
} = {
  isCheckinOpen: false,
  checkinValue: '',
  isCheckoutOpen: false,
  checkoutValue: '',
  calendarMonth: {
    startOf: () => ({ format: () => 1 }),
    endOf: () => ({ format: () => 1 }),
    format: () => 1,
  },
  updateCalendarMonth: () => null,
  available: true,
  updateCheckinDate: () => null,
  updateCheckoutDate: () => null,
};

describe('DatesDropdown Component', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<DatesDropdown isCheckinOpen={isCheckinOpen}
    isCheckoutOpen={isCheckoutOpen}
    checkinValue={checkinValue}
    checkoutValue={checkoutValue}
    calendarMonth={calendarMonth}
    updateCalendarMonth={updateCalendarMonth}
    available={available}
    updateCheckinDate={updateCheckinDate}
    updateCheckoutDate={updateCheckoutDate}
  />));

  it('renders the DatesDropdown component', () => {
    expect(wrapper.find(StyledDatesDropdown).length).toBe(1);
  });

  it('matches the snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
