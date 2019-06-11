import React from 'react';
import { shallow } from 'enzyme';
import Giftcard from './giftcard';

describe('<Giftcard />', () => {
  test('renders', () => {
    const wrapper = shallow(<Giftcard />);
    expect(wrapper).toMatchSnapshot();
  });
});
