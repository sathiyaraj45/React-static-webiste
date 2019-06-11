import React from 'react';
import { shallow } from 'enzyme';
import Tablebook from './tablebook';

describe('<Tablebook />', () => {
  test('renders', () => {
    const wrapper = shallow(<Tablebook />);
    expect(wrapper).toMatchSnapshot();
  });
});
