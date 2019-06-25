import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from './PageNotFound';

describe('<PageNotFound />', () => {
  test('renders', () => {
    const wrapper = shallow(<PageNotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
