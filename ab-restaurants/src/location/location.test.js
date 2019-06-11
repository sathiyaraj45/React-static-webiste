import React from 'react';
import { shallow } from 'enzyme';
import Location from './location';

describe('<Location />', () => {
  test('renders', () => {
    const wrapper = shallow(<Location />);
    expect(wrapper).toMatchSnapshot();
  });
});
