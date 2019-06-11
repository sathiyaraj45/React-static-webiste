import React from 'react';
import { shallow } from 'enzyme';
import Events from './events';

describe('<Events />', () => {
  test('renders', () => {
    const wrapper = shallow(<Events />);
    expect(wrapper).toMatchSnapshot();
  });
});
